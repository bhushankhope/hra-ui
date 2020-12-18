import { BimodalConfig } from '../models/bimodal.model';

export class UpdateGraphWidth{
  static readonly type = '[UPDATE WIDTH] Update Graph Width';
  constructor(width: number) {}
}

export class UpdateVegaSpec {
  static readonly type = '[UPDATE] Vega Spec';
  constructor(public spec: any) {}
}

export class UpdateVegaView {
  static readonly type = '[UPDATE] Vega View';
  constructor(public view: any) {}
}

export class UpdateBimodal {
  static readonly type = '[UPDATE] Bimodal Network';
  constructor(public nodes: any, public links: any) {}
}

export class UpdateBimodalConfig {
  static readonly type = '[UPDATE] Bimodal config';
  constructor(public config: BimodalConfig) {}
}
