import s from './index.module.css';

const Footer = () => {
 const year = new Date().getFullYear();
 return (
  <footer className={s.footer}>
   <p>Made with 🙌 and 🧠</p>
   <p>©️ {year} sunnyprakash.com</p>
  </footer>
 );
};

export default Footer;
