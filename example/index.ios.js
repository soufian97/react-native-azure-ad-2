import React from 'react';
import {AppRegistry,Text,StyleSheet,Picker} from 'react-native';
import {View} from 'react-native-webview';

import {AzureInstance, AzureLoginView} from '../lib/';

// CONSTANT
const CREDENTIAILS = {
    client_id: 'xxxxxxx-xxxxxxxxxx-xx-xxxx-xxxxxx',
    client_secret: 'mlkjrzezlKH98ùùe)d',
    scope: 'User.ReadBasic.All Mail.Read offline_access'
    
};

export default class azureAuth extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      displayName : "Nan",
      mail : "",
      id : ""
    };
		this.azureInstance = new AzureInstance(CREDENTIAILS);
    this._onLoginSuccess = this._onLoginSuccess.bind(this);
	}
	
	_onLoginSuccess(){
		this.azureInstance.getUserInfo().then(result => {
      console.log(result);
    
      
		}).catch(err => {
			console.log(err);
		})
	}

    render() {
        return (
                <AzureLoginView
                  azureInstance={this.azureInstance}
                  loadingMessage="Requesting access token"
                  onSuccess={this._onLoginSuccess}
                />
        );
    }
    
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
 },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('azureAuth', () => azureAuth);
