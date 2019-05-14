import React from "react";
import ReactDOM from "react-dom";
import { Flex, Box } from "rebass";

import Layout from "./components/layout/Layout";
import Section from "./components/layout/Section";
import Container from "./components/layout/Container";
import { H1, H2, H3, Text, Lead } from "./components/elements/Typography";
import Button from "./components/elements/Button";
import Divider from "./components/elements/Divider";
import theme from "./components/theme";

function App() {
  return (
    <Layout>
      <Section bg={theme.colors.gray[300]}>
        <Container>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box>
              <H1 as="h1">Heading 1</H1>
              <Divider />
              <H2 as="h2">Heading 2</H2>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu est eu leo fermentum lacinia. Ut non nulla in turpis
                aliquam vehicula.
              </Text>
              <H3 as="h3">Heading 3</H3>
            </Box>

            <Box py={6}>
              <Lead>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu est eu leo fermentum lacinia. Ut non nulla in turpis
                aliquam vehicula.
              </Lead>
            </Box>
            <Box py={6}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </Box>
            <Box py={6}>
              <Text as="p">
                Duis mollis at dui viverra congue. Maecenas vestibulum est sed
                dolor euismod scelerisque. Fusce tincidunt est orci, non feugiat
                neque placerat eu. Praesent egestas ut mauris eu ornare.
                Phasellus vel tempor ante, vel blandit dolor. Nunc id velit
                lacus. In laoreet sapien at ex tempus tempus sit amet quis nisl.
                Pellentesque non pharetra nisi, non volutpat velit. Sed vel
                ullamcorper mi. Nunc ut diam eu velit ultricies condimentum quis
                quis orci. Etiam tincidunt efficitur felis, in porttitor ligula
                porttitor ut. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Ut tempus nibh id nibh volutpat posuere. Praesent non
                bibendum mi. Nunc maximus sit amet diam venenatis dictum. Nullam
                eget iaculis nulla, interdum viverra magna.
              </Text>
              <Text as="p">
                Duis mollis at dui viverra congue. Maecenas vestibulum est sed
                dolor euismod scelerisque. Fusce tincidunt est orci, non feugiat
                neque placerat eu. Praesent egestas ut mauris eu ornare.
                Phasellus vel tempor ante, vel blandit dolor. Nunc id velit
                lacus. In laoreet sapien at ex tempus tempus sit amet quis nisl.
                Pellentesque non pharetra nisi, non volutpat velit. Sed vel
                ullamcorper mi. Nunc ut diam eu velit ultricies condimentum quis
                quis orci. Etiam tincidunt efficitur felis, in porttitor ligula
                porttitor ut. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Ut tempus nibh id nibh volutpat posuere. Praesent non
                bibendum mi. Nunc maximus sit amet diam venenatis dictum. Nullam
                eget iaculis nulla, interdum viverra magna.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Section>
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
