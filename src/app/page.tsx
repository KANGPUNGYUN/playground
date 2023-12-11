import * as React from "react";
import styles from "./playground.module.css";
import "./styles.css";
import {
  Box,
  Button,
  buttonPropDefs,
  Flex,
  Heading,
  Link,
  //
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components";
import { ArrowRightIcon } from "./icon";
import { Theme } from "./theme";
import { themeAccentColorsOrdered } from "./theme-options";
import NextLink from "next/link";

export default function Home() {
  return (
    <main>
      <div className={styles.PlaygroundRoot}>
        <Theme radius="medium" scaling="100%" appearance="dark">
          <PlaygroundSection>
            <Flex align="baseline" gap="4">
              <Heading id="button">
                <Link
                  color="gray"
                  underline="hover"
                  highContrast
                  href="#button"
                >
                  Button
                </Link>
              </Heading>
              <NextLink
                passHref
                legacyBehavior
                href="https://www.radix-ui.com/themes/docs/components/button"
              >
                <Link className={styles.PlaygroundDocsLink} size="2">
                  View in docs
                </Link>
              </NextLink>
            </Flex>
            <TabsRoot defaultValue="theme-colors">
              <TabsList size="2">
                <TabsTrigger value="theme-colors">Theme colors</TabsTrigger>
                <TabsTrigger value="all-colors">All colors</TabsTrigger>
                <TabsTrigger value="all-sizes">All sizes</TabsTrigger>
              </TabsList>
              <TabsContent value="theme-colors">
                <Box mt="6">
                  <table className={styles.PlaygroundTable}>
                    <thead>
                      <tr>
                        <th />
                        <th colSpan={2}>Accent</th>
                        <th colSpan={2}>Gray</th>
                        <th>Disabled</th>
                      </tr>
                    </thead>
                    <tbody>
                      {buttonPropDefs.variant.values.map((variant) => (
                        <tr key={variant}>
                          <td>{upperFirst(variant)}</td>
                          <td>
                            <Button variant={variant}>
                              Next <ArrowRightIcon width="16" height="16" />
                            </Button>
                          </td>
                          <td>
                            <Button variant={variant} highContrast>
                              Next <ArrowRightIcon width="16" height="16" />
                            </Button>
                          </td>
                          <td>
                            <Button variant={variant} color="gray">
                              Next <ArrowRightIcon width="16" height="16" />
                            </Button>
                          </td>
                          <td>
                            <Button variant={variant} color="gray" highContrast>
                              Next <ArrowRightIcon width="16" height="16" />
                            </Button>
                          </td>
                          <td>
                            <Button variant={variant} disabled>
                              Next <ArrowRightIcon width="16" height="16" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </TabsContent>

              <TabsContent value="all-colors">
                <Box mt="6">
                  <table className={styles.PlaygroundTable}>
                    <thead>
                      <tr>
                        <th />
                        {buttonPropDefs.variant.values.map((variant) => (
                          <th key={variant}>{upperFirst(variant)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {themeAccentColorsOrdered.map((color) => (
                        <tr key={color}>
                          <td>{upperFirst(color)}</td>
                          {buttonPropDefs.variant.values.map((variant) => (
                            <td key={variant}>
                              <Flex align="center" justify="center" gap="4">
                                <Button variant={variant} color={color}>
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                                <Button
                                  variant={variant}
                                  color={color}
                                  highContrast
                                >
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                              </Flex>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </TabsContent>

              <TabsContent value="all-sizes">
                <Box mt="6">
                  <table className={styles.PlaygroundTable}>
                    <thead>
                      <tr>
                        <th />
                        {buttonPropDefs.radius.values.map((radius) => (
                          <th key={radius} style={{ textAlign: "left" }}>
                            {radius === "none"
                              ? "No radius"
                              : upperFirst(radius)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {buttonPropDefs.variant.values.map((variant, index) => (
                        <React.Fragment key={variant}>
                          {index > 0 && (
                            <tr>
                              <td>&nbsp;</td>
                            </tr>
                          )}
                          {buttonPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              {buttonPropDefs.radius.values.map((radius) => (
                                <td key={radius} style={{ textAlign: "left" }}>
                                  <Button
                                    size={size}
                                    variant={variant}
                                    radius={radius}
                                  >
                                    Next{" "}
                                    <ArrowRightIcon
                                      {...buttonSizeToIconSize(size)}
                                    />
                                  </Button>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </TabsContent>
            </TabsRoot>
          </PlaygroundSection>
        </Theme>
      </div>
    </main>
  );
}

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function buttonSizeToIconSize(
  buttonSize: (typeof buttonPropDefs.size.values)[number]
) {
  if (buttonSize === "1" || buttonSize === "2")
    return { width: 16, height: 16 };
  if (buttonSize === "3") return { width: 18, height: 18 };
  if (buttonSize === "4") return { width: 20, height: 20 };
}

const PlaygroundSection: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <Flex
    className={styles.PlaygroundSection}
    direction="column"
    gap="5"
    mb={{ initial: "5", sm: "8" }}
  >
    {children}
  </Flex>
);
