<template>
  <div>
    <h2>A table with some data</h2>
    <Table>
      <template #header>
        <tr>
          <th v-for="(_value, key) in items[0]" :key="key">{{ key }}</th>
        </tr>
      </template>
      <template #data>
        <tr v-for="data in items" :key="data.id">
          <td v-for="value in data" :key="value">{{ value }}</td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table'

export default {
  data () {
    return {
      items: [
        {
          id: '1',
          name: 'foo',
          value: 500,
        },
        {
          id: '2',
          name: 'bar',
          value: 300,
        },
        {
          id: '3',
          name: 'baz',
          value: 800,
        },
      ],
    }
  },
  components: {
    Table,
  },
}
</script>

<style>

</style>
