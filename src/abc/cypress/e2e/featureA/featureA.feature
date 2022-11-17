# example run same feature multiple times with different data

@smoke
Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar
    Then I type <data> in search bar
    Examples:
      | test no. | data  |
      | 1        | hello |
      | 2        | dsada |