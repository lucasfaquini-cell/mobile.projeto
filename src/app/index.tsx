import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
                source={require("@/src/app/assets/castaldi.png")}
                style={styles.illustration}
            />
            <Text style={styles.title}>Programação Mobile.</Text>
            <View style={styles.form}>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
            </View>
            <Text style={styles.footerText}>
                Não tem uma conta ?{" "}
                <Link href="/signup" style={styles.footerLink}>
                    Cadstre-se aqui.
                </Link>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FDFDFD",
        padding: 32,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    illustration: {
        width: "25%",
        height: 300,
    },
    form: {
        marginTop: 30,
        gap: 24,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#000000",
    },
    footerLink: {
        color: "#0A1172",
        fontWeight: 700,
    },
});