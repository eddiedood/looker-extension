project_name: "data-insights"

application: data-insights {
  label: "data-insights"
  # url: "https://localhost:8080/bundle.js"
  file: "bundle.js"
  entitlements: {
    core_api_methods: ["me"] #Add more entitlements here as you develop new functionality
  }
}
