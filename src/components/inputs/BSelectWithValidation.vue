<template>
  <ValidationProvider
    ref="validator"
    :vid="vid"
    :name="$attrs.name"
    :rules="rules"
    v-slot="{ valid, errors }"
  >
    <b-form-group id="exampleInputGroup3" v-bind="$attrs">
      <b-form-select
        :options="options"
        :text-field="textField"
        :value-field="valueField"
        id="exampleInput3"
        v-bind="$attrs"
        :state="errors[0] ? false : valid ? true : null"
        v-model="innerValue"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled>Selecciona una opción</b-form-select-option>
        </template>
      </b-form-select>
      <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
  },
  props: {
    vid: {
      type: String,
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    // must be included in props
    value: {
      type: null,
    },
    options: {
      type: Array,
    },
    textField: {
      type: String,
    },
    valueField: {
      type: String,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      console.log(newVal);
      console.log(this.$refs.validator);
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>
