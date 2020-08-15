<template>
  <div>
    <h1>文件上传</h1>
    <form
      action="http://localhost:3000/upload"
      method="post"
      enctype="multipart/form-data"
    >
      <input type="file" name="file" id="" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from '@axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  async mounted() {
    const { data } = await axios.get("/api/hello");
    console.log(data);
  },
};
</script>
