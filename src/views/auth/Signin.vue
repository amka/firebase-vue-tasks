<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-2">
                    <v-toolbar flat dark color="primary">
                        <v-toolbar-title>Вход</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field prepend-icon="person" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required>
                            </v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password"
                                          type="password" required v-model="password" :rules="passwordRules">
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" :disabled="!valid" @click="submit">Войти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
</v-container>
</template>
