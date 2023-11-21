import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class ArtistDetailView extends Component<Props> {
    render() {
        const { artist } = this.props;
        return (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: artist.image }} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{artist.name}</Text>
              <Text style={styles.info}>Listeners: {artist.listener}</Text>
              <Text style={styles.info}>ID: {artist.id}</Text>
              <Text style={styles.info}>Streamable: {artist.streamable}</Text>
            </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        alignItems:"center",
      },
      detailsContainer: {
        alignItems: "center",
      },
      name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
      info: {
        fontSize: 14,
        color: "#555",
        marginTop: 4,
      },
    });