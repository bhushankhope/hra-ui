import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { filter, invoke, property } from 'lodash';

import { FlatNode } from '../../../core/models/flat-node';
import { OntologyNode } from '../../../core/models/ontology-node';
import { GetChildrenFunc } from '../../../core/services/ontology-search/ontology-search.service';

/**
 * Getter function for 'level' on a flat node.
 */
const getLevel = property<FlatNode, number>('level');

/**
 * Getter function for 'expandable' on a flat node.
 */
const isExpandable = property<FlatNode, boolean>('expandable');

/**
 * Represents a expandable tree of an ontology.
 */
@Component({
  selector: 'ccf-ontology-tree',
  templateUrl: './ontology-tree.component.html',
  styleUrls: ['./ontology-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OntologyTreeComponent implements OnInit {
  /**
   * The node like objects to display in the tree.
   */
  // tslint:disable-next-line: no-unsafe-any
  @Input()
  set nodes(nodes: OntologyNode[] | undefined) {
    this._nodes = nodes;
    if (this.control) {
      this.dataSource.data = this._nodes ?? [];
    }
  }

  get nodes(): OntologyNode[] | undefined { return this._nodes; }

  /**
   * Method for fetching the children of a node.
   */
  // tslint:disable-next-line: no-unsafe-any
  @Input()
  set getChildren(fun: GetChildrenFunc | undefined) {
    this._getChildren = fun;
    this.dataSource.data = this.nodes ?? [];
  }

  get getChildren(): GetChildrenFunc | undefined {
    return this._getChildren;
  }

  /**
   * Creates an instance of ontology tree component.
   *
   * @param cdr The change detector.
   */
  constructor(private cdr: ChangeDetectorRef) { }

  /**
   * Emits an event whenever a node has been selected.
   */
  @Output() nodeSelected = new EventEmitter<OntologyNode | undefined>();

  /**
   * Indentation of each level in the tree.
   */
  readonly indent: number | string = '1.5rem';

  /**
   * Tree controller.
   */
  readonly control = new FlatTreeControl<FlatNode>(getLevel, isExpandable);

  /**
   * Node flattener.
   */
  readonly flattener = new MatTreeFlattener(
    FlatNode.create, getLevel, isExpandable,
    // FIXME
    invoke.bind(undefined, this, 'getChildren') as GetChildrenFunc
  );

  /**
   * Data source of flat nodes.
   */
  readonly dataSource = new MatTreeFlatDataSource(this.control, this.flattener);

  /**
   * Storage for getter/setter 'nodes'.
   */
  private _nodes?: OntologyNode[] = undefined;

  /**
   * Storage for getter/setter 'getChildren'.
   */
  private _getChildren?: GetChildrenFunc;

  /**
   * A copy of the body node in order to manually select it when the component loads.
   */
  bodyNode = new FlatNode(
    {
      id: 'http://purl.obolibrary.org/obo/UBERON_0013702',
      label: 'body',
      parent: '',
      children: [
        'http://purl.obolibrary.org/obo/UBERON_0000948',
        'http://purl.obolibrary.org/obo/LMHA_00211',
        'http://purl.obolibrary.org/obo/UBERON_0002113',
        'http://purl.obolibrary.org/obo/UBERON_0002106',
        'http://purl.obolibrary.org/obo/UBERON_0001155',
        'http://purl.obolibrary.org/obo/UBERON_0002108',
        'http://purl.obolibrary.org/obo/UBERON_0001052'
      ],
      synonymLabels: []
    },
    0
  );

  /**
   * Currently selected node, defaulted to the body node for when the page initially loads.
   */
  selectedNode?: FlatNode = this.bodyNode;

  /**
   * Expand the body node when the component is initialized.
   */
  ngOnInit() {
    this.control.expand(this.control.dataNodes[0]);
  }

  /**
   * Selecting the body is slightly different because it has no parents, so here we are
   * selecting the body, collapsing all the nodes, then expanding the body node manually.
   */
  selectBody(): void {
    this.select(this.bodyNode);
    this.control.collapseAll();
    this.control.expand(this.control.dataNodes[0]);
  }

  /**
   * Expands the tree to show a node and sets the currect selection to that node.
   *
   * @param node The node to expand to and select.
   */
  expandAndSelect(node: OntologyNode, getParent: (node: OntologyNode) => OntologyNode): void {
    const { cdr, control } = this;

    if (node.label === 'body') {
      this.selectBody();
      return;
    }

    // Add all parents to a set
    const parents = new Set<OntologyNode>();
    let current = getParent(node);

    while (current) {
      parents.add(current);
      current = getParent(current);
    }

    // Find corresponding flat nodes
    const parentFlatNodes = filter(control.dataNodes, flat => parents.has(flat.original));
    const flatNode = control.dataNodes.find(flat => flat.original === node);

    // Expand nodes
    control.collapseAll();
    for (const flat of parentFlatNodes) { control.expand(flat); }

    // Select the node
    this.selectedNode = undefined;
    this.select(flatNode);

    // Detect changes
    cdr.detectChanges();
  }

  /**
   * Determines whether a node can be expanded.
   *
   * @param node The node to test.
   * @returns True if the node has children.
   */
  isInnerNode(this: void, _index: number, node: FlatNode): boolean {
    return node.expandable;
  }

  /**
   * Determines whether a node is currently selected.
   * Only a single node can be selected at any time.
   *
   * @param node  The node to test.
   * @returns True if the node is the currently selected node.
   */
  isSelected(node: FlatNode): boolean {
    return node.original.label === this.selectedNode?.original.label;
  }

  /**
   * Sets a node to be the currently selected node.
   * Deselects the previously selected node.
   *
   * @param node The node to select.
   */
  select(node: FlatNode | undefined): void {
    this.selectedNode = this.selectedNode = node?.original.label !== this.selectedNode?.original.label ? node : undefined;
    this.nodeSelected.emit(this.selectedNode && this.selectedNode.original);
  }
}
