import { Icons, Sections, Urls } from "helpers/constants";
import Layout from "components/Layout";
import {
  FurtherPostTitle,
  FurtherPosts,
  PostLink,
  PostTitle,
  PostsList,
} from "./styled";
import Icon from "assets/icons/Icon";
import { AnimateLink, VerticalDivider } from "components/common/styled";

const blogPosts = [
  {
    id: "3",
    url: "https://medium.com/javascript-in-plain-english/authentication-in-next-js-with-keycloak-and-nextauth-part-1-ae2a567accfe",
    title: "Authentication in Next.js with Keycloak and NextAuth",
  },
  {
    id: "2",
    url: "https://medium.com/@sunny-prakash/logging-express-js-apps-with-grafana-and-loki-aa8132172013",
    title: "Logging Express.js apps with Grafana and Loki",
  },
  {
    id: "1",
    url: "https://medium.com/javascript-in-plain-english/masonry-layout-with-infinite-scroll-no-libraries-please-efbcb013bd37",
    title: "Masonry Layout with Infinite Scroll",
  },
  {
    id: "4",
    url: "https://medium.com/javascript-in-plain-english/tailwind-in-react-native-heres-the-truth-55c48e1725a3",
    title: "Tailwind in React Native? Here’s the Truth!",
  },
];

const Read = () => {
  return (
    <Layout header={Sections.Read} scrollTo={Sections.Watch}>
      <PostsList>
        {blogPosts.map(({ id, url, title }) => (
          <li key={id}>
            <PostLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <PostTitle variant="P2">{title}</PostTitle>
              <Icon name={Icons.Arrow} rotate={-90} />
            </PostLink>
          </li>
        ))}
      </PostsList>
      <FurtherPosts>
        <AnimateLink
          href={Urls.Medium}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FurtherPostTitle variant="P2">More stories</FurtherPostTitle>
        </AnimateLink>
        <VerticalDivider> | </VerticalDivider>
        <AnimateLink
          href={Urls.SubscribeMedium}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FurtherPostTitle variant="P2">Follow me</FurtherPostTitle>
        </AnimateLink>
      </FurtherPosts>
    </Layout>
  );
};

export default Read;
