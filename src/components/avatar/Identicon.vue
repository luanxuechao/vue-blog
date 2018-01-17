<template>
   <Avatar v-bind:shape="this.shape" v-bind:icon="this.icon" v-bind:size="this.size"  v-bind:src="text" />
</template>
<script>
import {identicon} from 'sosnail'
export default {
       props: {
            shape: {
                type: String
            },
            size: {
                type: String
            },
            _text: {
                type: String
            },
            icon: {
                type: String
            }
        },
        data(){
          return{
            text:identicon({'text': this._text})
          }
        }
   }
</script>
