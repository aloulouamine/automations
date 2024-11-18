import * as cheerio from "cheerio";

/**
 * <table
  cellpadding="0"
  cellspacing="0"
  style="border-collapse: collapse"
  class="planning"
>
  <tbody>
    <tr>
      <th scope="col" class="navtop" onclick="LanceDemandePlanning(-1);">
        <span class="lucca-icon icon-arrown gray"></span>
      </th>
      <th class="jour" scope="col">1</th>
      <th class="jour" scope="col">2</th>
      <th class="jour" scope="col">3</th>
      <th class="jour" scope="col">4</th>
      <th class="jour" scope="col">5</th>
      <th class="jour" scope="col">6</th>
      <th class="jour" scope="col">7</th>
      <th class="jour" scope="col">8</th>
      <th class="jour" scope="col">9</th>
      <th class="jour" scope="col">10</th>
      <th class="jour" scope="col">11</th>
      <th class="jour" scope="col">12</th>
      <th class="jour" scope="col">13</th>
      <th class="jour" scope="col">14</th>
      <th class="jour" scope="col">15</th>
      <th class="jour" scope="col">16</th>
      <th class="jour" scope="col">17</th>
      <th class="jour" scope="col">18</th>
      <th class="jour" scope="col">19</th>
      <th class="jour" scope="col">20</th>
      <th class="jour" scope="col">21</th>
      <th class="jour" scope="col">22</th>
      <th class="jour" scope="col">23</th>
      <th class="jour" scope="col">24</th>
      <th class="jour" scope="col">25</th>
      <th class="jour" scope="col">26</th>
      <th class="jour" scope="col">27</th>
      <th class="jour" scope="col">28</th>
      <th class="jour" scope="col">29</th>
      <th class="jour" scope="col">30</th>
      <th class="jour" scope="col">31</th>
    </tr>
    <tr mois="11" annee="2024">
      <td class="mois">Novembre 2024</td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
            title="Toussaint"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
            title="Toussaint"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29360"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29360"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29360"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29360"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja remote AM"
            scope="AM"
            style="background-color: #e5ac00"
            duration="03:30:00"
            status="2"
            data-demande="29361"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <div
            class="ja remote PM"
            scope="PM"
            style="background-color: #e5ac00"
            duration="04:00:00"
            status="2"
            data-demande="29361"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29362"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29362"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja remote AM"
            scope="AM"
            style="background-color: #e5ac00"
            duration="03:30:00"
            status="2"
            data-demande="29363"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <div
            class="ja remote PM"
            scope="PM"
            style="background-color: #e5ac00"
            duration="04:00:00"
            status="2"
            data-demande="29363"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
            title="Armistice"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
            title="Armistice"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #008a00"
            duration="03:30:00"
            status="2"
            data-demande="28234"
            title="Journ&#xE9;e Off"
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #008a00"
            duration="04:00:00"
            status="2"
            data-demande="28234"
            title="Journ&#xE9;e Off"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja remote AM"
            scope="AM"
            style="background-color: #e5ac00"
            duration="03:30:00"
            status="2"
            data-demande="29869"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <div
            class="ja remote PM"
            scope="PM"
            style="background-color: #e5ac00"
            duration="04:00:00"
            status="2"
            data-demande="29869"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja remote AM"
            scope="AM"
            style="background-color: #e5ac00"
            duration="03:30:00"
            status="2"
            data-demande="29870"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29871"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29871"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29871"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29872"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29872"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29872"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29872"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja remote AM"
            scope="AM"
            style="background-color: #e5ac00"
            duration="03:30:00"
            status="2"
            data-demande="29944"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <div
            class="ja remote PM"
            scope="PM"
            style="background-color: #e5ac00"
            duration="04:00:00"
            status="2"
            data-demande="29944"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja AM"
            scope="AM"
            style="background-color: #006699"
            duration="03:30:00"
            status="2"
            data-demande="29945"
            title="Pr&#xE9;sence sur site "
          ></div>
          <div
            class="ja PM"
            scope="PM"
            style="background-color: #006699"
            duration="04:00:00"
            status="2"
            data-demande="29945"
            title="Pr&#xE9;sence sur site "
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="ja remote AM"
            scope="AM"
            style="background-color: #e5ac00"
            duration="03:30:00"
            status="2"
            data-demande="29946"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <div
            class="ja remote PM"
            scope="PM"
            style="background-color: #e5ac00"
            duration="04:00:00"
            status="2"
            data-demande="29946"
            title="T&#xE9;l&#xE9;travail"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour empty"></td>
    </tr>
    <tr mois="12" annee="2024">
      <td class="mois">D&#xE9;cembre 2024</td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
            title="No&#xEB;l"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
            title="No&#xEB;l"
          ></div>
          <span class="fl-day">Me</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">J</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">V</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">S</span>
        </div>
      </td>
      <td class="jour not-empty">
        <div class="na" scope="ALL">
          <div
            class="jc AM not-confirmed"
            scope="AM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jc PM not-confirmed"
            scope="PM"
            style=""
            duration="00:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">D</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">L</span>
        </div>
      </td>
      <td class="jour">
        <div class="na" scope="ALL">
          <div
            class="jo AM not-confirmed"
            scope="AM"
            style=""
            duration="03:30:00"
            status="0"
            data-demande="-1"
          ></div>
          <div
            class="jo PM not-confirmed"
            scope="PM"
            style=""
            duration="04:00:00"
            status="0"
            data-demande="-1"
          ></div>
          <span class="fl-day">M</span>
        </div>
      </td>
    </tr>
    <tr>
      <td class="navbottom" onclick="LanceDemandePlanning(1);">
        <span class="lucca-icon icon-arrows gray"></span>
      </td>
      <td colspan="31" class="navbottomrow"></td>
    </tr>
  </tbody>
</table>

 */

export const countPresenceDays = (planningHtml) => {
  const $ = cheerio.load(planningHtml);
  let presenceDaysCount = 0;

  // Find the current month row
  const currentMonthRow = $("tr[mois]").first();

  // Iterate over each day cell in the current month row
  currentMonthRow.find("td.jour").each((index, element) => {
    const dayCell = $(element);

    // Check if the day cell contains divs with the specified attributes
    dayCell.find("div > div").each((i, div) => {
      const dataDemand = $(div).attr("data-demande");
      const title = $(div).attr("title") || "";
      if (
        dataDemand !== "-1" &&
        (title.includes("travail") || title.includes("site"))
      ) {
        console.log("dataDemand :", dataDemand);
        console.log("title :", title);
        presenceDaysCount++;
      }
    });
  });

  return presenceDaysCount / 2;
};
