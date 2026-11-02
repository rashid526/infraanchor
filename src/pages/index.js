import { Home } from './Home.jsx';
import { Services } from './Services.jsx';
import { Industries } from './Industries.jsx';
import { About } from './About.jsx';
import { Work } from './Work.jsx';
import { Guides } from './Guides.jsx';
import { Contact } from './Contact.jsx';
import { EmailPreferences } from './EmailPreferences.jsx';
import { NotFound } from './NotFound.jsx';

export const pages = {
  home: Home,
  services: Services,
  industries: Industries,
  about: About,
  work: Work,
  insights: Guides,
  contact: Contact,
  unsubscribe: EmailPreferences,
  notfound: NotFound,
};
