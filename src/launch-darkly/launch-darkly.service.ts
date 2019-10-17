import { Injectable } from '@nestjs/common';
import * as config from 'config';
import * as LaunchDarkly from 'launchdarkly-node-server-sdk';

@Injectable()
export class LaunchDarklyService {
  private readonly ldClient: LaunchDarkly.LDClient;
  private readonly user = {
    firstName: 'Vincent',
    lastName: 'Chow',
    key: 'vincent.chow.demo.key',
    custom: {
      groups: 'beta_testers',
    },
  };

  constructor() {
    this.ldClient = LaunchDarkly.init(config.get('LaunchDarkly.key'));
    this.ldClient.waitForInitialization().catch(error => console.error(error));
  }

  async getFeatureFlag(flagName: string): Promise<any> {
    return await this.ldClient.variation(flagName, this.user, false);
  }
}
