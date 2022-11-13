import HasFormatter from 'interfaces/HasFormatter';

class Log {
  item: HasFormatter;

  heading: string;

  position: 'start' | 'end';

  constructor(item: HasFormatter, heading: string, position: 'start' | 'end') {
    this.item = item;
    this.heading = heading;
    this.position = position;
  }
}

export default Log;
