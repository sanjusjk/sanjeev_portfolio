import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  developer = {
    name: 'Jan Baszczok',
    dayOfBirthTimestamp: 602745592,
    email: 'baszczok@yasio.dev',
    workExperience: () => [
      { '2020-now': 'Full-stack Developer/Owner at Pixel Lab' },
      { '2023-now': 'Solutions Architect at Digitree Group S.A.' },
      { '2017-2023': 'Full-stack Developer at Digitree Group S.A.' },
      { '2013-2017': 'Full-Stack Designer at Digitree Group S.A.' },
      { '2006-now': 'Full-Stack Designer/developer at Yasio.dev' }
    ],
    education: () => [
      { '2012-2014': "Wyższa Szkoła Biznesu w Dąbrowie Górniczej - Master's Degree (mgr), Computer Science (IT)" },
      { '2008-2012': "Wyższa Szkoła Technologii Informatycznych w Katowicach - Bachelor of Engineering (inż.), Computer Science (IT)" }
    ],
    skills: () => [
      'HTML/CSS/JS', 'Vue', 'Node.js', 'Redis/NATS/RabbitMQ', 'Bootstrap/Tailwind', 'Webpack/Gulp/Vite',
      'SCSS/Less', 'npm/yarn/pnpm', 'Docker/k8s', 'PWA', 'SSR', 'SPA', 'GIT/CVS', 'Cordova', 'NativeScript',
      'Electron', 'Web-extensions', 'Web Sockets', 'Firebase', 'RWD/W3C/ARIA/WCAG', 'XSLT/Smarty/Twig',
      'PHP', 'MySQL/MongoDB/ORM', 'Wordpress', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere',
      'Motion design', 'UX/UI', 'DTP', 'AWS', 'GCP', 'C#', 'Unity', 'TypeScript', 'NestJS', 'Cypress',
      'Jest', 'Nuxt', 'Quasar'
    ]
  };
}
