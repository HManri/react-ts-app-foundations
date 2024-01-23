import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "theme/default";
import App from "App";

describe("App", () => {
  it("should render correctly", () => {
    const app = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );

    expect(app).toMatchSnapshot();
  });
});
