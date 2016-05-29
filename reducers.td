sequenceDiagram
  participant Advisor
  participant Search Form
  participant Search Reducer
  participant React/Redux

  opt Customer switches Advanced mode manually.
    Advisor->>Search Form: Person clicks on advanced search checkbox/switch.
    Search Form->>Search Form: Switch/Checkbox send 'modeChange' event to Search Form.
    Search Form->>Search Reducer: Search Form dispatches event to reducer.
    Search Reducer->>Search Reducer: Updates with `state.advancedMode=true`;
    Search Reducer->>Search Reducer: Clears out Account Number text input.
    Search Reducer->>React/Redux: This automatically notifies React/Redux of changes.
    React/Redux->>Search Form: Triggers re-render.
    Search Form->>Search Form: Switch component picks up `advancedMode` value from state and renders accordingly
    Search Form->>Search Form: Form picks up `advancedMode` and shows advanced form instead of simple one.
  end
