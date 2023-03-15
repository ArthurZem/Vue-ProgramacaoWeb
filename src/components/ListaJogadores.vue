<template>
  <v-container>
    <v-card>
      <v-card-title>
        Lista de jogadores de futebol
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="jogadores" :search="search" sort-by="nome" :sort-desc="sortDesc" @update:sort-by="updateSort" @update:sort-desc="updateSortDesc">
          <template v-slot:item.id="{ item }">
            {{ item._id }}
          </template>
          <template v-slot:item.nome="{ item }">
            {{ item.nome }}
          </template>
          <template v-slot:item.idade="{ item }">
            {{ item.idade }}
          </template>
          <template v-slot:item.posicao="{ item }">
            {{ item.posicao }}
          </template>
          <template v-slot:item.altura="{ item }">
            {{ item.altura }}
          </template>
          <template v-slot:item.peso="{ item }">
            {{ item.peso }}
          </template>
          <template v-slot:item.time="{ item }">
            {{ item.time }}
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jogadores: [],
      search: '',
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Nome',
          value: 'nome'
        },
        {
          text: 'Idade',
          value: 'idade'
        },
        {
          text: 'Posição',
          value: 'posicao'
        },
        {
          text: 'Altura',
          value: 'altura'
        },
        {
          text: 'Peso',
          value: 'peso'
        },
        {
          text: 'Time',
          value: 'time'
        },
      ],
      sortDesc: false,
      sortBy: 'nome'
    };
  },
  mounted() {
    this.getJogadores();
  },
  methods: {
    getJogadores() {
      axios.get('/api/jogadores')
        .then(response => {
          this.jogadores = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateSort(value) {
      this.sortBy = value;
    },
    updateSortDesc(value) {
      this.sortDesc = value;
    },
  },
};
</script>
