import { Component } from '@angular/core';

@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.css']
})
export class CardsliderComponent {
  cards = [
    {
      title: 'Card 1',
      description: 'Digital marketing has become an essential tool for businesses to reach their target audience effectively. Among the various online marketing..  ',
      image: '../assets/seo.jpg',
      imageLink: '/blogseo',
      headingLink: 'Digital Marketing Strategies: Boosting Your Business with SEO',
      headingLinkUrl: '/blogseo'
    },
    {
      title: 'Card 2',
      description: 'Today day and age where competition is fierce and user attention is fleeting, the role of UI/UX design in creating...',
      image: '../assets/ux.png',
      imageLink: '/blogui',
      headingLink: 'The Role of UI/UX Design in Creating Engaging Digital Experiences',
      headingLinkUrl: '/blogui'
    },
    {
      title: 'Card 3',
      description: 'Branding is the process of creating a unique name, symbol, or design that identifies and distinguishes a product or service...',
      image: '../assets/branding (1).jpg',
      imageLink: '/blogbranding',
      headingLink: 'The Power of Branding: How Graphic Design Shapes Your Identity',
      headingLinkUrl: '/blogbranding'
    },
    {
      title: 'Card 4',
      description: 'As mobile devices become increasingly ubiquitous, more businesses are looking to build mobile apps to engage with their customers and...',
      image: '../assets/mobil-app-development.jpg',
      imageLink: '/blogmobileapps',
      headingLink: 'Building Mobile Apps: Choosing the Right Development Framework',
      headingLinkUrl: '/blogmobileapps'
    },
    {
      title: 'Card 5',
      description: 'WordPress, which powers more than one-fourth of all websites, is perhaps the simplest platform to use when creating a blog...',
      image: '../assets/wordpress.jpg',
      imageLink: '/blogwordpress',
      headingLink: "WordPress Development: The Ultimate Starter's Guide",
      headingLinkUrl: '/blogwordpress'
    },
    {
      title: 'Card 6',
      description: ' Your clients are the heart and soul of your business, regardless of the sector you operate in. Therefore,attracting new...',
      image: '../assets/lead-generation.jpg',
      imageLink: '/blogsales',
      headingLink: 'Growing Your Sales Funnel Through Lead Generation',
      headingLinkUrl: '/blogsales'
    },
    {
      title: 'Card 7',
      description: 'You can advertise your company online with Google Ads (formerly known as Google Adwords), a Pay Per Click (PPC) tool...',
      image: '../assets/googleads.jpg',
      imageLink: '/blogbusiness',
      headingLink: 'How to Improve Your Business Strategy with Google Ads?',
      headingLinkUrl: '/blogbusiness'
    },
    {
      title: 'Card 8',
      description: 'Nowadays, everything is done digitally, therefore if you want your business to expand, you need a website. Website Development is...',
      image: '../assets/website.jpg',
      imageLink: '/blogwebsite',
      headingLink: 'Why Is A Website Required For Businesses?',
      headingLinkUrl: '/blogwebsite'
    },
    {
      title: 'Card 9',
      description: 'In order to create the greatest personalised goods, custom software development firms must spend a surprising amount of time on-site.',
      image: '../assets/custom.jpg',
      imageLink: '/blogcustom',
      headingLink: 'Custom Software Development Services - Benefits & Onsite Goal',
      headingLinkUrl: '/blogcustom'
    },
    {
      title: 'Card 10',
      description: 'Every business needs information technology, but there is occasionally a misunderstanding about what really falls under its cover. Digital marketing...',
      image: '../assets/IT-DM.jpg',
      imageLink: '/blogit',
      headingLink: 'Things To Aware About Information Technology and Digital Marketing',
      headingLinkUrl: '/blogit'
    },
    {
      title: 'Card 11',
      description: 'When you run a small business, time is a valuable commodity and marketing your brand can eat up a lot...',
      image: '../assets/advantages.jpg',
      imageLink: '/blogadvantage',
      headingLink: '8 Advantages of Digital Marketing Outsourcing',
      headingLinkUrl: '/blogadvantage'
    },
    {
      title: 'Card 12',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image: '../assets/fs.jpg',
      imageLink: '/blogfinance',
      headingLink: 'Financial Services - Five Ways to Start',
      headingLinkUrl: '/blogfinance'
    },
    {
      title: 'Card 13',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image: '../assets/common.jpg',
      imageLink: 'path/to/card2-image-link',
      headingLink: 'Common mistakes when managing finances',
      headingLinkUrl: 'path/to/card2-heading-link-url'
    },
    {
      title: 'Card 14',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image: '../assets/tips.jpg',
      imageLink: 'path/to/card2-image-link',
      headingLink: 'Tips for Digitizing Financial Services',
      headingLinkUrl: 'path/to/card2-heading-link-url'
    },
    {
      title: 'Card 15',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image: '../assets/de.jpg',
      imageLink: 'path/to/card2-image-link',
      headingLink: 'Winning the Race for Digital commerce',
      headingLinkUrl: 'path/to/card2-heading-link-url'
    },
    // Add more card objects as needed
  ];
}
