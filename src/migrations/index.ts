import * as migration_20260801_224400 from './20260801_224400';

export const migrations = [
  {
    up: migration_20260801_224400.up,
    down: migration_20260801_224400.down,
    name: '20260801_224400'
  },
];
