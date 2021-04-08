import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
			flex: 1,
			backgroundColor: 'white',
			justifyContent: 'center'
		}}>
			<Text style={{
				fontSize: 45,
				textAlign: 'center'
			}}>Hola</Text>
		</View>
    )
}
