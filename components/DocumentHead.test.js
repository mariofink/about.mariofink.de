import DocumentHead from "./DocumentHead";

describe("DocumentHead", () => {
  it("gets passed title and favicon", () => {
    const underTest = DocumentHead({ title: "mytitle", favicon: "icon" });
    const [title, link] = underTest.props.children;
    expect(title).toBeDefined();
    expect(title.props.children).toEqual("mytitle");
    expect(link).toBeDefined();
    expect(link.props.rel).toEqual("icon");
  });
});
