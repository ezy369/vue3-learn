<template>
  <ul class="dnd-wrap" ref="parentRef">
    <li v-for="item in tapes" :key="item" class="idle">
      <slot name="item" v-bind="{ imgSrc: item }"></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
// https://drag-and-drop.formkit.com/#configuration
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import { animations, parents } from '@formkit/drag-and-drop'

const props = defineProps({
  list: { type: Array, default: () => [] }
})
const dragStatus = ref('Not dragging')
const dragCount = ref(0)
// 自定义plugin，plugin必须是一个函数
const dragStatusPlugin = (parent) => {
  const parentData = parents.get(parent)
  if (!parentData) return

  function dragstart(event) {
    const node = event.target
    dragStatus.value = `Dragging ${node.textContent}`
    dragCount.value++
  }
  function touchstart(event) {
    const node = event.target
    dragStatus.value = `Dragging ${node.textContent}`
    dragCount.value++
    console.log('touchstart', event)
  }
  function dragend(event) {
    console.log(event)
  }
  function touchend(event) {
    console.log('touchend', event)
  }
  return {
    setupNode(data) {
      data.node.addEventListener('dragstart', dragstart)
      data.node.addEventListener('touchstart', touchstart)
      data.node.addEventListener('dragend', dragend)
      data.node.addEventListener('touchend', touchend)
    },

    tearDownNode(data) {
      data.node.removeEventListener('dragstart', dragstart)
      data.node.removeEventListener('touchstart', touchstart)
      data.node.removeEventListener('dragend', dragend)
      data.node.removeEventListener('touchend', touchend)
    }
  }
}

const [parentRef, tapes] = useDragAndDrop(props.list, {
  plugins: [animations(), dragStatusPlugin],
  draggingClass: 'dragging',
  dropZoneClass: 'over',
  touchDraggingClass: 'dragging',
  touchDropZoneClass: 'over',
  sortable: true
})
</script>

<style lang="scss">
.dnd-wrap {
  display: grid;
  grid-template-columns: repeat(5, 18%);
  grid-gap: 1.5vmin;
  li {
    list-style: none;
  }
}

.default-style {
  object-fit: cover;
  width: 100%;
  box-sizing: border-box;
  background: 0px 1px 1px #091e42;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px #091e42;
  transition: all 50ms ease-in-out;
  -webkit-touch-callout: 'none'; // needed to avoid a "save image" popup on iOS
}

.idle:hover {
  background: #ffffff;
  box-shadow: 0px 1px 1px #091e4240 0px 0px 1px #091e424f;
}

.dragging {
  filter: grayscale(0.8);
}
.over {
  transform: scale(1.1) rotate(8deg);
  filter: brightness(1.15);
  box-shadow: 0px 8px 12px #091e4226 0px 0px 1px #091e424f;
}
</style>
