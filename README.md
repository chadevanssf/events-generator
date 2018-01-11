# events-generator

<!-- markdownlint-disable MD007 -->
<!-- TOC -->

- [events-generator](#events-generator)
    - [Configuration](#configuration)
        - [Platform Events](#platform-events)
        - [Custom Metadata Type](#custom-metadata-type)
    - [Testing](#testing)
    - [Resources](#resources)

<!-- /TOC -->
<!-- markdownlint-enable MD007 -->

Generate Platform Events, for example from a button click, to make life easier for testing IoT Explorer or other functionality that needs to have a pre-configured event sent.

Deploy using SFDX, click the button below:

[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com/deploy?template=https://github.com/chadevanssf/dynamic-image-display)

Deploy via Metadata API, click the button below

<!-- markdownlint-disable MD033 -->
<a href="https://githubsfdeploy.herokuapp.com"><img alt="Deploy to Salesforce"         src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png"></a>
<!-- markdownlint-enable MD033 -->

## Configuration

### Platform Events

Leverage existing Platform Event

### Custom Metadata Type

Configure Custom Metadata Type **Events_Generator__mdt**

- Add new entries to correspond to the number of buttons to display
- Each entry is another button on the list
- Use **Group__c** to have multiply list of buttons
- **Event_Data__c** is the JSON representation of the event, the same as would be entered into Workbench REST Explorer

## Testing

An additional demo component that reads the events as they come in, called **streamingDemo**, shows what events have come into Salesforce Platform Events for that event.

## Resources

1. Streaming component leverages work from Andrew Fawcett at [https://github.com/afawcett/streamingcomponent](https://github.com/afawcett/streamingcomponent)
