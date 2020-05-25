<template>
  <div class="game">
    <h2>Current Turn: {{ currentSign }}</h2>
    <div v-if="isGameOver" class="gameOver">
      <h2>{{ currentSign }} won!</h2>
      <button type="button" click="resetGame">Reset</button>
    </div>
    <div class="row" v-for="(row, rowIndex) in grid" :key="rowIndex">
      <button
        type="button"
        class="cell"
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        @click="handleClick(rowIndex, cellIndex)"
      >
        {{ cell }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isGameOver: false,
      currentSign: 'X',
      grid: Array(3).fill().map(() => Array(3).fill('')),
    }
  },
  methods: {
    resetGame () {
      this.isGameOver = false
      this.currentSign = 'X'
      this.grid = Array(3).fill().map(() => Array(3).fill(''))
    },
    handleClick (rowIndex, cellIndex) {
      if (this.grid[rowIndex][cellIndex]) return
      this.grid[rowIndex][cellIndex] = this.currentSign

      if (false) {
        this.isGameOver = true
      } else {
        this.currentSign = this.currentSign === 'X' ? 'O' : 'X'
      }
    },
  },
}
</script>

<style>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gameOver {
  position: absolute;
  z-index: 100;
  background-color: gray;
}

.row {
  display: flex;
  flex-flow: row nowrap;
}

.cell {
  margin: 2px;
  border: solid black 2px;
  min-height: 50px;
  min-width: 50px;
}
</style>
