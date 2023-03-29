
<script >
import HelloWorld from "./HelloWorld.vue";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    const increment = () => {
      this.counter++;
    };

    const decrement = () => {
      this.counter--;
    };

    return (
      <div>
        <h2 className="box">the counter is {this.counter}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        {/* <input value={this.counter}></input> */}
        <hr />
        <HelloWorld>
          {{ default: (props) => <button>I'm a button</button> }}
        </HelloWorld>
      </div>
    );
  },
};
</script>

<style>
.box {
  border: 1px solid;
}
</style>