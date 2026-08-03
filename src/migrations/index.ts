import * as migration_20260801_224400 from './20260801_224400';
import * as migration_20260802_225146 from './20260802_225146';

export const migrations = [
  {
    up: migration_20260801_224400.up,
    down: migration_20260801_224400.down,
    name: '20260801_224400',
  },
  {
    up: migration_20260802_225146.up,
    down: migration_20260802_225146.down,
    name: '20260802_225146'
  },
];
