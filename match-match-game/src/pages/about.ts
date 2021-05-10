/* На странице About Game должна быть представлена краткая инструкция по началу игры */
interface Page {
  render: string,
}

export const about: Page = {
  render: `<section>
        <p>About game</p>
      </section> `,
};
