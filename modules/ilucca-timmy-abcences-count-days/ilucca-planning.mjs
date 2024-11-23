import * as cheerio from "cheerio";


export class IluccaPlanning {
  #currentMonthRow;
  $;
  constructor(domString) {
    this.$ = cheerio.load(domString);
    this.#currentMonthRow = this.$("tr[mois]").first();
  }

  countPresenceDays() {
    let presenceDaysCount = 0;
    this.#walkThroughDayCells((dayCell) => {
      dayCell.find("div > div").each((i, div) => {
        const dataDemand = this.$(div).attr("data-demande");
        const title = this.$(div).attr("title") || "";
        if (
          dataDemand !== "-1" &&
          (title.includes("travail") || title.includes("site"))
        ) {
          presenceDaysCount++;
        }
      });
    });

    return presenceDaysCount / 2;
  }

  getCurrentMonthAndYearFromPlanning() {
    const currentMonthRow = this.$("tr[mois]").first();
    const monthName = currentMonthRow.find("td.mois").text().split(" ")[0];
    const year = currentMonthRow.attr("annee");
    const month = currentMonthRow.attr("mois");
    return {
      monthName,
      year,
      month,
    };
  }

  getMonthPresenceDaysMap() {
    const monthPresenceDaysMap = new Map();
    const { month, year } = this.getCurrentMonthAndYearFromPlanning();
    let day = 0;
    this.#walkThroughDayCells((dayCell) => {
      day++;
      let presenceCount = 0;
      dayCell.find("div > div").each((_, div) => {
        const dataDemand = this.$(div).attr("data-demande");
        const title = this.$(div).attr("title") || "";
        if (
          dataDemand !== "-1" &&
          (title.includes("travail") || title.includes("site"))
        ) {
          presenceCount += 0.5;
        }
      });
      monthPresenceDaysMap.set(`${year}-${month}-${day}`, presenceCount);
    });
    return monthPresenceDaysMap;
  }

  #walkThroughDayCells = (callback) => {
    this.#currentMonthRow.find("td.jour").each((_, element) => {
      const dayCell = this.$(element);
      callback(dayCell);
    });
  };
}
