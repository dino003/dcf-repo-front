<template>
     <li>
    <div 
      :class="{bold: isFolder}"
      
      @dblclick="$emit('make-modification', item)">
    <span v-if="isFolder" @click="toggle"> <i :class="iconClasses"></i></span>

     <span style="font-size: 1.5em" :title="item.libelle"> <code > {{ item.code |subStr(10) }} </code>  {{ item.libelle |subStr(100) }} </span>
     <span style="cursor:pointer;"  class="add" @click="$emit('create-children', item)"><i class="icon-plus-sign icon-2x"></i></span>
     

     <span style="cursor:pointer;" class="add" @click="$emit('make-delete', item)"><i class="icon-trash icon-2x"></i></span>

    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <treePlanProgramme
        class="item"
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        @create-children="$emit('create-children', $event)"
        @make-delete="$emit('make-delete', $event)"

        @make-modification="$emit('make-modification', $event)"
      ></treePlanProgramme>
    </ul>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'treePlanProgramme',
     props: {
    item: Object,
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
    }
  },

//   created(){
//       console.log(this.maxNiveauPlanProgramme)
//   },
  computed: {

      ...mapGetters('parametreGenerauxAdministratif', ['maxNiveauPlanProgramme']),

  
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    },
    iconClasses() {
      return {
        'icon-chevron-right': !this.isOpen && this.item.children.length,
        'icon-chevron-down': this.isOpen && this.item.children.length
        //    'icon-folder-close': !this.isOpen && this.item.children.length,
        // 'icon-folder-open': this.isOpen && this.item.children.length
      }
    },

   
  },

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
        
      }
    },
     show(){
        return this.isOver = true
    },

    kit(){
        return this.isOver = false
 
    },
    br: function (){
    this.$emit('make-br', this.item.children)
  
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-modification', this.item)
        this.isOpen = true
      }
    },

    //    makeFor: function () {
    //   	this.$emit('create-children', this.item)
      
    // }
  }
}
</script>
<style>

.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>
