
workflow "Build and Publish" {
  on = "push"
  resolves = "Publish"
}

action "Publish Filter" {
  needs = ["Build"]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build" {
  uses = "framer/bridge@master"
  args = ["build", "design-system.framerfx"]
}

action "Publish" {
  uses = "framer/bridge@master"
  args = ["publish", "design-system.framerfx", "--yes"]
  needs = ["Build", "Publish Filter"]
  secrets = ["FRAMER_TOKEN"]
}
