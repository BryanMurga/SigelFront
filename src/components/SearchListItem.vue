<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick(this.label);
    }
  }
};
</script>


<template>
    <li>
        <button 
            type="button"
            class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100"
            @click="handleClick"
        >
            {{ label }}
        </button>
    </li>
</template>