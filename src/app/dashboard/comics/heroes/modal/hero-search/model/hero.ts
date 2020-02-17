import { PowerStatistics } from './power-statistics';
import { HeroBiography } from './hero-biography';
import { HeroAppearance } from './hero-appearance';
import { HeroOccupation } from './hero-occupation';
import { HeroConnections } from './hero-connections';

export class Hero {
  id: number;
  name: string;
  powerStats: PowerStatistics;
  biography: HeroBiography;
  appearance: HeroAppearance;
  work: HeroOccupation;
  connections: HeroConnections;
  image: {url: string};
}
