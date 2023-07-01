import AuthLogo from './extensions/hyde-park-icon.png';
import MenuLogo from './extensions/hyde-park-icon.png';
import favicon from './extensions/hyde-park-icon.png';

export default {
    config: {
      auth: {
        logo: AuthLogo,
      },
      menu: {
        logo: MenuLogo,
      },
      head: {
        favicon: favicon,
      },
      translations: {
        en: {
          'app.components.LeftMenu.navbrand.title': 'HydePark Dashboard',
          'app.components.LeftMenu.navbrand.workplace': 'HydePark Workplace',
          "Auth.form.welcome.title": "Welcome to HydePark",
          "Auth.form.welcome.subtitle": "Log in to HydePark Development",
        },
      },
    },
    bootstrap() {},
};
