type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  foo: 'sdfsf',
  bar: 10,
  baz: true
});

document.addEventListener(
  // Autocomplete this string!
  "dragover",
  (event) => {
    console.log(event);
  },
);
