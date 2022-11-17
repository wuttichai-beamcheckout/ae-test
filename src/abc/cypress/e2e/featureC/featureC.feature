# example with data table

@sometag
Feature: Test2
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar
    Then I type data in search bar
      | email        |
      | my@email.com |
