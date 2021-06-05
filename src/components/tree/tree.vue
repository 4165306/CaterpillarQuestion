<template>
<div>
  <ul :style="showBorder ? 'border-left: 1px solid' : ''">
    <li
      v-for="(node, index) in treeData"
      :key="index"
    >
      <div class="h-flex">
        <div>
          {{node[labelName]}}
        </div>
        <div class="h-margin-left-5">
          <a-icon type="plus-circle" @click.stop="add(node)" />
          <a-icon class="h-margin-left-2" @click.stop="del(node.id)" type="minus-circle" />
        </div>
      </div>
      <tree
        :tree-data="node[childrenName]"
        :children-name="childrenName"
        :label-name="labelName"
        :show-border="true"
        :is-child="true"
      />
    </li>
  </ul>
  <div v-if="!isChild">
    <a-button @click="() => {this.visible = true;this.parentNodeName = '';this.node = cloneTreeData}">
      添加顶级节点
    </a-button>
  </div>
  <a-modal v-model="visible" title="节点名称" ok-text="确认" cancel-text="取消" @ok="addData">
    <a-input v-model="parentNodeName" placeholder="请输入顶级节点名称" />
  </a-modal>
</div>
</template>

<script>
export default {
  name: 'tree',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    labelName: {
      type: String,
      default: () => 'value'
    },
    childrenName: {
      type: String,
      default: () => 'child'
    },
    showBorder: {
      type: Boolean,
      default: () => false
    },
    isChild: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      visible: false,
      parentNodeName: '',
      cloneTreeData: {},
      node: null,
      id: 0
    }
  },
  created () {
    this.cloneTreeData = [
      {
        value: 1,
        id: 1,
        child: [
          { value: 2, id: 2, child: [] },
          { value: 2, id: 3, child: [] }
        ]
      }
    ]
  },
  watch: {
    cloneTreeData: {
      handler (val) {
        this.$emit('onNodeChange', val)
      },
      deep: true
    }
  },
  methods: {
    addData () {
      const childData = {}
      childData[this.childrenName] = []
      childData[this.labelName] = this.parentNodeName
      childData.id = this.id++
      console.log('this.node', this.node, typeof this.node)
      this.node.push(childData)
      this.visible = false
    },
    add (node) {
      this.node = node[this.childrenName]
      this.visible = true
    },
    del (id) {
      console.log('del', id, this.cloneTreeData)
      this.findAndDel(id, this.cloneTreeData)
      console.log('clone', JSON.parse(JSON.stringify(this.cloneTreeData)))
    },
    findAndDel (id, data) {
      data.forEach((item, index) => {
        if (item.id === id) {
          data.splice(index, 1)
        }
        if (item[this.childrenName] && item[this.childrenName].length > 0) {
          this.findAndDel(id, item[this.childrenName])
        }
      })
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  padding: 0 0 0 10px;
}
ul {
  padding: 0 0 0 0;
}

</style>
