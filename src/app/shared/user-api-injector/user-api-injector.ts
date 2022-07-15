//import { AppConfigService } from "../app-config.service";

export class UserApiInjectorComponent {
  /* private static appConfigData: any = null;
  static getAppConfigData(appConfigService: AppConfigService) {
    if (this.appConfigData === null)
      this.appConfigData = appConfigService.getAppConfig;
    return this.appConfigData;
  } */
  constructor() {}
}
export const USER_API_BASE_URL = 'https://61602c82faa03600179fb917.mockapi.io/orders';
  //new InjectionToken('USER_API_BASE_URL', {
  //providedIn: 'root',
  //factory: () => UserApiInjectorComponent.getAppConfigData(inject(AppConfigService))
