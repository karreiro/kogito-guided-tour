/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { KogitoGuidedTour, Tutorial, DemoMode, NoneSelector, QuerySelector, GraphSelector } from "kogito-guided-tour";
import {} from "kogito-guided-tour";
import React, { useEffect } from "react";

const SAMPLE_TUTORIAL_LABEL = "Sample tutorial";

export function useSampleTutorial() {
  useEffect(() => {
    KogitoGuidedTour.setup();
    KogitoGuidedTour.registerTutorial(getSampleTutorial());
    KogitoGuidedTour.start(SAMPLE_TUTORIAL_LABEL);

    return () => KogitoGuidedTour.teardown();
  }, []);
}

function getSampleTutorial() {
  function stepTwoTemplate() {
    const div = document.createElement("div");
    div.innerText = "Second step (supports HTMLElement based templates)";
    return div;
  }

  function stepThreeTemplate() {
    return () => {
      return (
        <div>
          Third step
          <br />
          <img
            alt="Sample"
            style={{ filter: "grayscale(1)" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAYEUlEQVR4nO1dCXAcV5nuue9L0uga67B8YCm2bPkiMSaxyRInlQBxYKksJNzZIkBCcaR2w7IFqWIXthKyRRJIdilgHS8QIBDIEhyCnYvgOE7k2I4tGR+KLHnGkmakue+emf163qTVmunpGXX3aJzd+WpK1d3q43//9///+9/r914rcrkc1UD9oKy3AP/f0SCgzmgQUGc0CKgzGgTUGQ0C6owGAXVGg4A6o0FAndEgoM5oEFBnNAioMxoE1BkNAuqMBgF1RoOAOqNBQJ3RIKDOaBBQZ6iX4BmTI8f8U+6Qd5rsGk26tq5uU3ufva1zCZ5eDQLTnujU2OxsiI4FsKs22h3trq6B9Uvw6BoScPzZPxw9sO/Eyy+VO2HZ8t4rdr13aNdNalt77cQQQDYZOfqnJ1964lcX3hznPWHtFdv7Bjeu3bGrdraiqMWoiCO//9nTj/4k4PNVef7ffva2LR/+nOxiCMN97KU9/3JPlUJuunrXrs/cWQsaZCYAvvzkA98utXq7SdHpUPQ0aTTajM2gVCopnSaXTCuyWSoYz3r8OYNr7fV3P6TUmWUURgCMifzHfSvblU6TGiKxx9MplTdKz4RjcyF9JFGsmatvvnXX339ZXknkJACxfu83v8q1KbNescal7O9UGXS5bESXSapUuozSnFTx1f367k1tH7x3CTjwH9t34TffNBuKC54OMRJigwg5FcidncpO+HJcJhCU3n/n3TK6gmwEQPsPfuET7C5U/+7V2q7WbHrWGHVb6PiCysbQkjC0RTTWZNFNmnbcYbv8VlnkKQc6OOX+0c3ZVIx7MOa2xr2GIiHVBtrkCmus3uEzib/O2Vga7C0tn3twj1wcyEMAIs8P7vg4a/sDy5Tb16hg8qExOymVUafnnh9LJvDX0h02ukLc40qtsevzv6+pE3j/5xuRk/vY3UyWChxvg5CQ0KI3cM8MJ+KQEzQYWk9g94Vx43hES/4lIwfyEPDAp3ezicR1g7re9ixsKjxhIaWyWMzhcKToElK8Ug7s193jWH+ddJF4gbRn8vs3sOZPtK/NmomQpedDbCKnseO0xuw9cqHt2EzBS5DCfeEHe6XbigwNMVRorPbfv1kN7YfONEP7bTZHp9NJCoa/RSVEmXECTkt4jdzj2YvHpItUDunZcW7wiZ5rhvZZIUuB4/gvzCh2cXU64ty4bHpTZ8FcUOQ/7flP6SJJJQA2hYyTbEP7riYFE099eii3tFSlR3AaaghYIot04IJEkQSQmHh9/kEhHeSEfiteBVshHCjppsH28PpWmhw/8NhexF6JIkklAA0ZEvo3r1BB+ygVsX0Bmyo6AhtERc3u5rIZqmagQ1PsdnzaDDmruYpx3zwH4alV2IUfODWF9OGV3z0mUSSpBKAZSeXT/C0rmFuh1mXifhntE5TGolRgvvbj6ogX8DlkMinfGPklPSfID9s4jv8KX8tuK8J2YTmLxdYzaVLCtxzb71xeiGPD+/cJXlQZkroi4IAk+r9vowa2C/OHiM02Q6XripGOzouhts53S0ChEfeoInSBDrhTc+fBTTbmL8ogeaG2u3AfbVMPNvTdQ7rOteR4JjpbeGJIV5TzVAMmEPk79S1vOs2xTZ2qYY8V3o/8W0qvkSQCJk4epfJJJ2nUwKkpviBTEYhCFFXoqoOWZ5+5l7HuqdFqdM0LEIZfYmKY7CK7BQeG3nemA272HBFygjNkRKiNkRGhMgABOOgdOymFAEkh6OLZU/iLBj3ZhSEX5ftVAgVj62EoLnTkV9CdaO2XAreKjx+ee/5BmkOAaGQSBea6W5ma4Myx41LuJomAgHcGLV7UvYu6qrhNYIwmnGO8nRO1g9KcTFndOVVaxLW5dMHIBu2MiSRjUSmSSApBeHZ3y+K0vwDGaLrJo7EmxXiNNIDvpG0SP7RCWtL9ioxG4OQii1FoEmQDNQFFVZVHCUASATqjqbUJohfCh8ZEU+EKlxQK85bqhcrNAQJUPKkIxrPplCoUYyhPppm/dD5lVavywmiYeshqzGm0GYdJadRV1cLXO2MRargaGlio9PN8IACs6u+rrhD8kERAd09bJggdFJxAa48HfULWTLSPgINiC5c1llTM+BXQdTCqmJnLBhLMI2JpmonnmUwm332SoGn2fL2aKYhKodCqVEYN02Nj0iptJgrZgc2Ua7bT7XaFQJSDPMHssDHcpQ25KpZapZ2vnFrUye51WypeIgBpBKzbMncGLZGCrWmaY9RZB7Rcrl8Fhp/pflNfRhEw88kZpTeonJhiNB5Lp+I0DS3H6XQsvehgrVYqQYZBrTFpNHa9gfDRYst1OtO8ZJCgFFHMOCJrua7AjT/hRFxtoJXa+aDf0mZwrd++WNm4kNoZN/nIbm5qETrTjAZOafsexSCGz3uT8SnlpFfp9im80QSU7k/ERWhcGIQPh95gUKudJr2rJdflzHa1ZnndQhecdwUuAdNBP+mVY490fOoX9oGdUgSTSgCaoJ5HP8Xukv7FZu2C7i0kG37zidLef8SZs27lmcmcJ5z2JxLBZILOZqnaA2TYdHqHXg8metpy65ZnSl/OoFZwJgaLzJ/WeAwdo+yR1mvuar7mLonCyNAd7T+2L7DvG+wuGpmhMTvLQTgzjbBTZGhQ/clx1TmPwh2K+uIx2e29SoCJNpO52WBc3akYWrmAhkwymvFntHPbyG6NtE/J9T4AHIQO/BvbdIJ+6Ykma7qDBH2u9uEiUP3IeSVU74mEl8bkhcHSMNir2LiKRnsyHS4EmWzKZAzshPYzxjF9y5vkoMbibL7xPrleWsj2SpIOTvlffLjoZROVr9xYuOdyh95QIeCMBwOXguq5AA2dZkuvXb+1Zyqf4BcADhbUulfd7rjydhnH0cg8KiLlGwsf+XVs7GBRox9kHD6lHpnMucOh2bhsfQyyw6jRrHQ097dFNi6b5h6H1ds2fkhe1RPUZFxQUa0QiSv+/Ib67EziEjT8UhBXGOgwrW11s65g3/jBjo88XIvHyd8Fg1iE+oDdhfb/eFjxhidy1j936WsfgJAToeCrE4G/vOnyRgpvigJHfh08tLcWj5OfAN++b7G1MYL+7w+pT3rDiDyyP6imQJw8Nu195q8d09EOcsT7x+8gwMr+IJkJQPCJjx8m20zkOaY9PRu4lIO+AJAcn/XP7j9lJBwgNZp+/CuyP0VOArLJCBt8kIki8rx9tU9AOHh5zExiUeTsX2QPRHIS4H/uIRJ8kPO8cEx9zh9/W2ufABwgFqE+QD5K5QOR8GvnxUI2AhAfQ0d/Q7aPnGFynrdd3C8HcDARjLxwgRkHh0A0+8y9Mt5cNgLm9t9PNlDxHh/PIeOU686XAmBMMKnjUxZs+154WMbaWB4Ckp4TpO5F8EFbF+K+LTLORQEmNeZtJ4FIRieQZ4bM3PPfJxsnx1WecEog9KOZ02dX97pUZDcU1R+fjNSrMw7t3sEus9VUeMU4MaM7NV3WcZn2AQLRuHHn6iiaBU07Ps+OdpECGQiA+ZMBIMh8Rs4rPZGyryU39zjes1alVUTYdzgUFf+bAdXh8+pnTyaX0mmg+u1r1Ft7IEacPbi1JxFNtu07nixHw3Q00hxu9UaiaCHD5mRpG8sQgvwvPkI2YP7uULScOV+zznDtunhe+8WAIu642gmlSBemGjiNqi9cY8trvxgmXfBDWxIQlfdCmAii6ytvMikpnACWJ10YqQSgOiLRH+Z/zqMoZ/63bGvmLTALlPymLVaJwlQDxMBP7nTw2gELiFqOA0TXYMpGmgWs5UmBVALCR35NNoj584YRFKa3qfLgGZxzeZ/UUR4V8Z7LdMLaJwAH5YSBE5zwMFWx/7Vf0sEKI1krQhIBaJJETjxF5ZOfcuYPfxe2fS6u7FfBQqWIJAxEuUUJwxsVg8mEJ2wlThB8RWrDWFJpg6f+TJq+zGiGKP8b3V0b7NXfELa50lnDQIScZ1HCoKIuPY5iIhBNBpg2gf+1X0kUSRIB9MQhsjE6ofInEqUnwPyrCT4EBr111Ufu3/axGk4YvuFL33rH7q/hQVWeD3fhdQKkQxN+5ibpufHAyHNSRBJPAOJP7MwLVL7X0+PP8ub+Qyu0Vd5txdWfuuxrBxzrr+td3S9apIrovmyD7fJb8aAVOz9e5SW8TgMngMcXeknPPS9FJPEEhM69SuLP2EVlIBHnPWdDt6nifQ751jx0+qvN19xFJrz1rpA00k8YZF4jHtR87T8+Hvrn0WDllhQ79rsI8PgRNzM0L3jkcSkiiW+IZS68RjaCUUWUL/eH8wrnGyj/gelrZ5Mt2E4mMzod0zyu3aoMRvMCW570O06Gbuk0uHe07V9lGS13FUIo8oLS6g1VcTDZTlHedNiLKCR6eJZ4AmJjB8mG26cIJnkqgGWWsgOnYfWvzd1AVL9k0PFNifHEXT8b/zho2O58rt/G37By6BXekvgKSqKpLHIhtIozE69QS0wAM1ErP+4B7S/IwZv/NNlN3IY+kMqZD/u2HPVvWmLVVwRo+OXELc063wbH8NaWV4sct8dp9Z73l16FwHsxonKaqcjI04hp4h4tkoD07DjZ8Eez+UHLPGA7uRi0DD7xev/xwBD/mVYtiT9Uft6ZOJEqIjw3y91tbtaHQinuEZjFgaldr8be16t8ZffQKOUrTH1Rq/hviMBL02gNhGOeEVikuEnbIglgJ9ymU6pUpmxfZsfyNdYNN5n63+uNWY4/t7/cadAFux2e9ZY7TSLgpmCXrWPsdh3vaWDlODX0ge2f3bgqRsY4USPny90zGCu4PlIScdWAyCyInUwaiikyZUYWZVZc3/XZJ5D2qW3tTU1C8waWL7ex27OBSnM8JIDLbm+vUGugp9eibelDboYiKPv4ZwDE6TSlLjQz2ZRksRBJQHquYBRkpgov4pH5V5KIMMuXly3w4Pr5KuH0iRouVTB8+DC7vXZt2XoIIbGjYz6B9s/O8p6WymRi8cK0ctHvyMQS8NbIQzqzYKYKF6NHX+fufuDGFeXuduWV8/NSxk5KmnQojPNnTrPbQxudUDTvaZs3ty286q/lbpjOFuqH1FTZRFYYIgnIxniygiL4fV5ujQot8zrB7t0r2BqYWcTt0EFxIlWDIy+9wG7joVdf3VV6Dlj5yEffwe5OjhyLRSr3nqIeFieSWAKqm8T7/L6n2G0U+J++vrWIA+ze+rH5vocTf3mxmtKKBmzi6MH55dTw6CJ5oP0vfnGIG39efqnsooNFENc1LSYL4g6MQYpGJsjx4omf/PDGT9zG7qJg373/ypcPXhwenqHyoR9uwZo/8NMf/1iEPIvC07/Yu2FbYVYXHg159j46evQoUzlv2OC8/oblXO2jff7UT/cI3E2jnF9aJBP1iRg7LfWdMJkcWg6wuN/+1wIOUOYdO5fhV3ry8Wf/MPr6cDUPZSfgsUeQkKBKrOat8sH9z8AJuBx85rayPUK/2/MIilDuv8yMTMO89cQDXt3iu1GkEmA15gzlPQB47OEHNm3dWnE1BdQW/3r3PwicQCZ2cac8mg05+B9+iRTTIxuMUmiTx9IpfyIhPLHy3+/+8vd++duKnU7g6b+/d5/ACYwF0POv73Npnv6YipBKgEabIfNyywEx/eu33/ath38owAG0/8UP38gb/bkT6lwtzKTfvo6s2cC/phBo8AU1F+d056eZDpLZeGw6Gil1Cxj1t79y593ffUCAA2j/O1+6XaBcVH5ycrN1XmZlvNp1UrkQQwC3zd1uV8AeefsLWaDAd33ylptvv5MbiwhQnTz585/DS0q1TyZKwN5XdyryU0rTFdeTgE/g19uevWKAGaA3MWU6P232RhOeSLjIIRDrQPnuT97GK9Lje/Y89uD9FQMaXL/DLHV5KZEzZM7fv4NNhPYd1rw45q1mcJWjxblx+1U9q1ZjO5VKIeVH0llO9S6raUVnrr+bZw5p9eDOhC2lgYjUv2Go77JBrZbxYzQUXt7/dDWZGIQcaGn96KZz7JH2W/eImLknkgDu/OzjY6o/vRGfCAVF3KcUzQajy2Id6FKsX5ERXu8hk6WikYIBqnVqgZPZqZkTwYhcQ4Yh55ZOaudqqZO2RdYBams7S8BKV/bVMwbpc05hU702+8pW/eDKlMASODBqvy9J07kRNz3mZxrhfQ71gEutVissFpXVytN1idg12JeBnMOnTac9xrP+WemDIVEtDbgWdAEYW3tE3EcsAZbW+QfrcgjTs3GzFOMi0xNh+FvXINbzaz8UyoTDGbc/PBvSD19MemMF8z89lxq+qHrPCoOLzuEER4uO1xtw8N3raJtJZTrvlDhzBNJ2WjRtpknuQa5OqodIArTOldzdoZUZt88sbo0HNuJf3p/pbeev0xBDpi6miOrH/OqxQPEQGJDx7Ln4pg4dXME7lXA41LyuAMAVmu207az97Ixe3KxNCAxb2dy7gD9NU++Svg/Qdy94tYJ6cqAnG001j/hmFlUkTsSnywVxGL7fT7v9WY9fh2x7LEDzPgIcwC2iyVynA6pngkM5DhDf2jenXeNa5/l21Aq8qaoAECc7LaE204IGmql3U/V34EIkAbrOtUqtkdsjBMtKpnG31moiLLs6QKdDKRzxifYR7qHZ6VimnPYJwIFDz/qQEAdsrXDsnGlk0ohwVI37FmqppgS37iUw9m0TvrbsPcVdRuU5YCdEEmx5B+20KU2jTqTevKufFLWq+lzpvOqr1T5ifUWpwBBnT4gDKl8rXDFAr1uuGJ0wnfOYBRbLQdBvMRjRKMlPoufpnDD1v7eibLyQQED/9UUEAGgEdbVmT45r3T496Rvg/teuz7U2KdGqanWQgCO03hyT7eQjD7RPFWu2LEB5nicmqVer4aBmk1kl3IJD/ITpbFxFTc4wrehAxOzxM2LH0gzfpJ0PT202Tq1tCnLXjWBh7BwQvYSBeAJsa94dOmAs7Zcm3o0fle8bCMaZwtgMSoMul1dEtdEWuSb11kvXU3OpRYXpC+Fcm5FCjd1mYWpvl6vyAD3IBuvBj5pfok6ZlzyblzyT8JV9V2rf9unqZSuCeAJQ6ZvXXh86IjQ6Nd83QMx8cc09ZsEbmrmEmD+bcVZ7ORND1ORa3AehTCAQlQJkFEmeSZYd4aqxOC1DuxclHheSBuc6rrodVbGUO5QDnawq4AhgmsOZ3y/1buwKQqVwXPEJKV8RkEQAHizF+6qHiNlLVsuCYalwKdFPFzZ/WKHoO1PSZ8gwo07slZd6lAiBUY68AGGGjJjeeV4ImH/zjfdJ/IiGDNNR2j703RoFIoqZO8aovs2ochoXEcQJYeRaiUj4xsv9y7H5w9IXLpOBAG1Ln+3ab1Q+TxRsxoKEa5q0VQYiUNWWZ4u9lqr06rQcBLSP1LN193dE3LMI8kzIsg/sbNpxhyy3KoLLMS/hpjZ1RT/ACaCq6Fq1WmjZ3HIQ0L6mqdf16cdk+dqTbDPiUBnIyAE3a+x2zi84CuWubtLyTuTDQfyL1X6+R6gAi2UR4YvK17rC2u/9/JNyLR4n96cMR54LPn2PLEv/k34Isp3viVvQFECW6U/MH3HoC2GHANF/wDXfxFnWpaveA6B9gVrXvPJdHX/38KW7aiKVHyU5+8y97NcrpMDtTpHmGDAdjqBlS9pWwoDtcwOXQNd0EYRVT+XXrHS+755qblU9arJqIhA8tDdw8EfSXYHrB1SeBpo2BmPZUiZg9ah1uaqnqtZ+RdWjym2/+SFZVucoQq0IoPiWchUH8u53sa1ZVLzlXo0tuHkl1etbemv6hcsaEkAAGoKv7I2ceEq6NzAdREk6HGZCPxuaikDeDAu/o6featwKqx7h3rrhJsvQ7pp+27LmBBBkk5HgqT8nR59Kek7I9XUeeAZ3dgLJ9IUr22r0jmhjHrjWPHhDLQJOKZaIABbMyornXs1ceK10eePaoaLeNRanadWVxr5thpXvQrtyaaQiWGoCuEB0Co+/np1mPoInS9bEgu0+E1A6gru+exOUzv3S29KjngQUIb/y1ut0aGqxX3GrRt1UPrZo2/th4Kplm82uftmX4RaHS4iAIiBYpWfHY95JZdyX8p6lwzPgJjnn5q7vXwoEE/yURgf7KcOcdZmxtWeJA0v1uHQJEAC4ySaKh28q9eYl+B697HhbEvB/CUv7BcEGStAgoM5oEFBnNAioMxoE1BkNAuqMBgF1RoOAOqNBQJ3RIKDOaBBQZzQIqDMaBNQZDQLqjAYBdUaDgDqjQUCd0SCgzvhf/3jqRc4MPxQAAAAASUVORK5CYII="
          />
        </div>
      );
    };
  }

  function getGraphFunctionMock(): (
    nodeName: string
  ) => {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
  } {
    return (nodeName: string) => {
      // TODO: remove-me: Provided by DMN editor
      if (nodeName === "Decision-1") {
        return {
          bottom: 60,
          height: 50,
          left: 10,
          right: 110,
          top: 10,
          width: 100,
          x: 10,
          y: 10,
        };
      }

      const canvas = document.querySelector("canvas")! as HTMLCanvasElement;
      const rect = canvas.getBoundingClientRect();

      return {
        bottom: rect.top + 60 + 60,
        height: 60,
        left: rect.left + 60,
        right: rect.right + 60 + 140,
        top: rect.top + 60,
        width: 140,
        x: rect.left + 60,
        y: rect.top + 60,
      };
    };
  }

  return new Tutorial(SAMPLE_TUTORIAL_LABEL, [
    {
      selector: new NoneSelector(),
      position: "center",
      mode: new DemoMode(),
      highlightEnabled: false,
      content: <div>First step (supports React based templates)</div>,
    },
    {
      selector: new QuerySelector("#html-rectangle"),
      position: "right",
      highlightEnabled: false,
      mode: new DemoMode(),
      content: stepTwoTemplate(),
    },
    {
      selector: new QuerySelector("#html-rectangle"),
      position: "bottom",
      highlightEnabled: false,
      mode: new DemoMode(),
      content: stepThreeTemplate(),
    },
    {
      selector: new GraphSelector("rectangle", getGraphFunctionMock()),
      position: "right",
      highlightEnabled: false,
      mode: new DemoMode(),
      content: () => <div>Forth step</div>,
    },
    {
      selector: new GraphSelector("rectangle", getGraphFunctionMock()),
      position: "bottom",
      highlightEnabled: true,
      mode: new DemoMode(),
      content: () => <div>Fifth step (with highlight)</div>,
    },
  ]);
}
