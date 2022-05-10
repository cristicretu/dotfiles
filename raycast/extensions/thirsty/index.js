var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => Command
});
var import_api = require("@raycast/api");
var import_react = require("react");
function Command() {
  const [interval, setInterval] = (0, import_react.useState)("30");
  function handleSubmit(values) {
    console.log(values);
    (0, import_api.showToast)({ title: "Submitted form", message: "See logs for submitted values" });
  }
  return /* @__PURE__ */ _jsx(import_api.Form, {
    actions: /* @__PURE__ */ _jsx(import_api.ActionPanel, null, /* @__PURE__ */ _jsx(import_api.Action.SubmitForm, {
      onSubmit: handleSubmit
    }))
  }, /* @__PURE__ */ _jsx(import_api.Form.Description, {
    text: "Change the frequency of water breaks."
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown, {
    id: "interval",
    title: "Show every",
    value: interval,
    onChange: setInterval
  }, /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "10",
    title: "10 minutes"
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "20",
    title: "20 minutes"
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "30",
    title: "30 minutes"
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "40",
    title: "40 minutes"
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "50",
    title: "50 minutes"
  }), /* @__PURE__ */ _jsx(import_api.Form.Dropdown.Item, {
    value: "60",
    title: "60 minutes"
  })), /* @__PURE__ */ _jsx(import_api.Form.Separator, null));
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vZnVuL3RoaXJzdHkvc3JjL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRm9ybSwgQWN0aW9uUGFuZWwsIEFjdGlvbiwgc2hvd1RvYXN0IH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBWYWx1ZXMgPSB7XG4gIHdlaWdodDogbnVtYmVyO1xuICBmcmVxdWVuY3k6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IFtpbnRlcnZhbCwgc2V0SW50ZXJ2YWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIjMwXCIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCh2YWx1ZXM6IFZhbHVlcykge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgc2hvd1RvYXN0KHsgdGl0bGU6IFwiU3VibWl0dGVkIGZvcm1cIiwgbWVzc2FnZTogXCJTZWUgbG9ncyBmb3Igc3VibWl0dGVkIHZhbHVlc1wiIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICA8QWN0aW9uLlN1Ym1pdEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Rm9ybS5EZXNjcmlwdGlvbiB0ZXh0PVwiQ2hhbmdlIHRoZSBmcmVxdWVuY3kgb2Ygd2F0ZXIgYnJlYWtzLlwiIC8+XG4gICAgICB7LyogPEZvcm0uVGV4dEZpZWxkIGlkPVwidGV4dGZpZWxkXCIgdGl0bGU9XCJUZXh0IGZpZWxkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0XCIgZGVmYXVsdFZhbHVlPVwiUmF5Y2FzdFwiIC8+ICovfVxuICAgICAgPEZvcm0uRHJvcGRvd24gaWQ9XCJpbnRlcnZhbFwiIHRpdGxlPVwiU2hvdyBldmVyeVwiIHZhbHVlPXtpbnRlcnZhbH0gb25DaGFuZ2U9e3NldEludGVydmFsfT5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSB2YWx1ZT1cIjEwXCIgdGl0bGU9XCIxMCBtaW51dGVzXCIgLz5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSB2YWx1ZT1cIjIwXCIgdGl0bGU9XCIyMCBtaW51dGVzXCIgLz5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSB2YWx1ZT1cIjMwXCIgdGl0bGU9XCIzMCBtaW51dGVzXCIgLz5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSB2YWx1ZT1cIjQwXCIgdGl0bGU9XCI0MCBtaW51dGVzXCIgLz5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSB2YWx1ZT1cIjUwXCIgdGl0bGU9XCI1MCBtaW51dGVzXCIgLz5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSB2YWx1ZT1cIjYwXCIgdGl0bGU9XCI2MCBtaW51dGVzXCIgLz5cbiAgICAgIDwvRm9ybS5Ecm9wZG93bj5cbiAgICAgIDxGb3JtLlNlcGFyYXRvciAvPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXFEO0FBQ3JELG1CQUF5QjtBQU9WLG1CQUFtQjtBQUNoQyxRQUFNLENBQUMsVUFBVSxlQUFlLDJCQUFpQjtBQUVqRCx3QkFBc0IsUUFBZ0I7QUFDcEMsWUFBUSxJQUFJO0FBQ1osOEJBQVUsRUFBRSxPQUFPLGtCQUFrQixTQUFTO0FBQUE7QUFHaEQsU0FDRSxxQkFBQyxpQkFBRDtBQUFBLElBQ0UsU0FDRSxxQkFBQyx3QkFBRCxNQUNFLHFCQUFDLGtCQUFPLFlBQVI7QUFBQSxNQUFtQixVQUFVO0FBQUE7QUFBQSxLQUlqQyxxQkFBQyxnQkFBSyxhQUFOO0FBQUEsSUFBa0IsTUFBSztBQUFBLE1BRXZCLHFCQUFDLGdCQUFLLFVBQU47QUFBQSxJQUFlLElBQUc7QUFBQSxJQUFXLE9BQU07QUFBQSxJQUFhLE9BQU87QUFBQSxJQUFVLFVBQVU7QUFBQSxLQUN6RSxxQkFBQyxnQkFBSyxTQUFTLE1BQWY7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBSyxPQUFNO0FBQUEsTUFDckMscUJBQUMsZ0JBQUssU0FBUyxNQUFmO0FBQUEsSUFBb0IsT0FBTTtBQUFBLElBQUssT0FBTTtBQUFBLE1BQ3JDLHFCQUFDLGdCQUFLLFNBQVMsTUFBZjtBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFLLE9BQU07QUFBQSxNQUNyQyxxQkFBQyxnQkFBSyxTQUFTLE1BQWY7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBSyxPQUFNO0FBQUEsTUFDckMscUJBQUMsZ0JBQUssU0FBUyxNQUFmO0FBQUEsSUFBb0IsT0FBTTtBQUFBLElBQUssT0FBTTtBQUFBLE1BQ3JDLHFCQUFDLGdCQUFLLFNBQVMsTUFBZjtBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFLLE9BQU07QUFBQSxPQUV2QyxxQkFBQyxnQkFBSyxXQUFOO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
