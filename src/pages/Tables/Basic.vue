<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Tables</h1>
      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Employee List</p>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="mock.employeeTable.search"
                append-icon="mdi-magnify"
                label="Search"
                clearable
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              v-model="mock.employeeTable.selected"
              :headers="mock.employeeTable.headers"
              :items="mock.employeeTable.employee"
              :search="mock.employeeTable.search"
              item-key="name"
              show-select>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols=12>
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Material-UI Table</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left pa-6">NAME</th>
                    <th class="text-left">EMAIL</th>
                    <th class="text-left">PRODUCT</th>
                    <th class="text-left">PRICE</th>
                    <th class="text-left">DATE</th>
                    <th class="text-left">CITY</th>
                    <th class="text-left">STATUS</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in mock.materialUITable" :key="item.name">
                    <td class="pa-6">{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.product }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.city }}</td>
                    <td v-if="item.status === 'Sent'">
                      <v-chip
                        link
                        color="success"
                        class="ma-2 ml-0"
                      >
                        Sent
                      </v-chip>
                    </td>
                    <td v-else-if="item.status === 'Pending'">
                      <v-chip
                        link
                        color="warning"
                        class="ma-2 ml-0"
                      >
                        Pending
                      </v-chip>
                    </td>
                    <td v-else-if="item.status === 'Declined'">
                      <v-chip
                        link
                        color="secondary"
                        class="ma-2 ml-0"
                      >
                        Declined
                      </v-chip>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from './mock'

export default {
  name: 'Tables',
  data() {
    return {
      mock
    }
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
