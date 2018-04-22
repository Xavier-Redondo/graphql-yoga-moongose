import { wrap } from 'async-middleware';
import map from 'p-map';
import * as coreConnectors from '../connectors';

export default () =>
  wrap(async (req, res, next) => {
    req.connectors = Object.entries({
      ...coreConnectors
    }).reduce((connectors, [connectorName, Connector]) => {
      const connector = new Connector();
      return { ...connectors, [connectorName]: connector };
    }, {});

    await map(Object.values(req.connectors), connector => connector.setup());

    next();
  });
