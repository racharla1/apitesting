# apitesting
Repo for all API testing frameworks

## Structure

```text
playwright/
  tests/                         Playwright API tests
  fixtures/                      Shared test data and fixtures
selenium-rest-assured/
  src/test/java/api/             REST Assured API tests
  src/test/java/ui/              Selenium browser tests
  src/test/resources/            Shared test data and configuration
```

The directories are placeholders for separate frameworks; dependencies, build
configuration, and tests have not been added yet. Playwright can make API
requests directly. In the Java framework, REST Assured handles API requests,
while Selenium handles browser interactions when needed.
