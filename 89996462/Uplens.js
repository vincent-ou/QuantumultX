/* Uplens — 解锁订阅
 * 原作者：89996462
 * 适配版本：2.9.5
 * 清理整理：Muse — 去作者推广信息与写入作者身份的字段，逻辑与数值与原版一致
 * [rewrite_local]
 * [mitm] hostname = gateway.apphud.com
 */

var objc = JSON.parse($response.body);

    objc = 
{
  "data" : {
    "results" : {
      "locale" : "en_CN",
      "id" : "60230605-24c0-4eca-a274-1e57003c3c98",
      "created_at" : "2024-05-30T14:24:09.402Z",
      "subscriptions" : [
        {
          "status" : "trial",
          "group_id" : "c0c2bd85",
          "autorenew_enabled" : true,
          "introductory_activated" : true,
          "cancelled_at" : null,
          "kind" : "autorenewable",
          "id" : "d20b2066-1490-4d23-8a88-87b345a67d53",
          "next_check_at" : "2024-09-18T12:34:48.000Z",
          "product_id" : "unlimited_plan_year_store_offer",
          "platform" : "ios",
          "environment" : "production",
          "local" : false,
          "retries_count" : 0,
          "units_count" : 1,
          "unit" : "year",
          "in_retry_billing" : false,
          "started_at" : "2024-09-18T11:34:48.000Z",
          "original_transaction_id" : "430001957813479",
          "expires_at" : "9999-09-21T11:34:48.000Z",
          "is_consumable" : null
        }
      ],
      "paywalls" : [
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "73a03e3c",
          "items" : [
            {
              "product_id" : "ai_pack_large",
              "id" : "3711a9ae",
              "store" : "app_store",
              "name" : "AI Pack Large"
            },
            {
              "product_id" : "ai_pack_medium",
              "id" : "ce3c0460",
              "store" : "app_store",
              "name" : "AI Pack Medium"
            }
          ],
          "from_paywall" : null,
          "identifier" : "avatars_paywall",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "Avatars Paywall"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "f7b0f1dc",
          "items" : [
            {
              "product_id" : "ai_pack_xl",
              "id" : "d9116b54",
              "store" : "app_store",
              "name" : "AI Pack XL"
            },
            {
              "product_id" : "ai_pack_large",
              "id" : "3711a9ae",
              "store" : "app_store",
              "name" : "AI Pack Large"
            }
          ],
          "from_paywall" : null,
          "identifier" : "avatars_xl_paywall",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : "{\"popular_index\": 0}",
          "name" : "Avatars XL "
        },
        {
          "default" : true,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "d40d5edf",
          "items" : [
            {
              "product_id" : "unlimited_plan_year",
              "id" : "f7309874",
              "store" : "app_store",
              "name" : "Yearly"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            },
            {
              "product_id" : "unlimited_plan_week",
              "id" : "c18bbe86",
              "store" : "app_store",
              "name" : "Weekly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "general_paywall",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "General"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "310365ee",
          "items" : [
            {
              "product_id" : "unlimited_plan_year_intro",
              "id" : "8bcb6925",
              "store" : "app_store",
              "name" : "Year Intro"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            },
            {
              "product_id" : "unlimited_plan_week",
              "id" : "c18bbe86",
              "store" : "app_store",
              "name" : "Weekly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "general_paywall_intro",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "General Intro"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "c30e5ab4",
          "items" : [
            {
              "product_id" : "unlimited_plan_year",
              "id" : "f7309874",
              "store" : "app_store",
              "name" : "Yearly"
            },
            {
              "product_id" : "unlimited_plan_year_store_offer",
              "id" : "6a10ab64",
              "store" : "app_store",
              "name" : "Year Store Offer"
            }
          ],
          "from_paywall" : null,
          "identifier" : "season_offers",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "Season Offers"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "27613fef",
          "items" : [
            {
              "product_id" : "unlimited_plan_year",
              "id" : "f7309874",
              "store" : "app_store",
              "name" : "Yearly"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "starter_offer",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "StarterOffer"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "017f06ca",
          "items" : [
            {
              "product_id" : "unlimited_plan_year_discount",
              "id" : "7485648d",
              "store" : "app_store",
              "name" : "Year Discount"
            }
          ],
          "from_paywall" : null,
          "identifier" : "to_year_offer",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "ConvertToYearOffer"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "a11aa81d",
          "items" : [
            {
              "product_id" : "unlimited_plan_year_store_offer",
              "id" : "6a10ab64",
              "store" : "app_store",
              "name" : "Year Store Offer"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "trial_2_products",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "Trial 2 Products"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "7bfc01ce",
          "items" : [
            {
              "product_id" : "unlimited_plan_year_store_offer",
              "id" : "6a10ab64",
              "store" : "app_store",
              "name" : "Year Store Offer"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            },
            {
              "product_id" : "unlimited_plan_week",
              "id" : "c18bbe86",
              "store" : "app_store",
              "name" : "Weekly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "trial_3_products_v2",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : "{\"use_old_paywall\": false, \"use_old_video\": true, \"use_video_v4\": false}",
          "name" : "Trial 3 Horizontal"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "88ac181d",
          "items" : [
            {
              "product_id" : "unlimited_plan_year_intro",
              "id" : "8bcb6925",
              "store" : "app_store",
              "name" : "Year Intro"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "trial_intro",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "Trial"
        },
        {
          "default" : false,
          "variation_identifier" : null,
          "variation_name" : null,
          "id" : "34998ebb",
          "items" : [
            {
              "product_id" : "unlimited_plan_year",
              "id" : "f7309874",
              "store" : "app_store",
              "name" : "Yearly"
            },
            {
              "product_id" : "unlimited_plan_month",
              "id" : "51055eda",
              "store" : "app_store",
              "name" : "Monthly"
            }
          ],
          "from_paywall" : null,
          "identifier" : "unlimited_offer",
          "experiment_id" : null,
          "experiment_name" : null,
          "json" : null,
          "name" : "UnlimitedOffer"
        }
      ],
      "user_id" : "5C65E441-9C22-4C50-83DD-8FB294D178FA",
      "currency" : {
        "code" : "CNY",
        "id" : "a5604c08-9833-4d8b-a677-f31e7717d8e5",
        "country_code" : "CN",
        "country_code_alpha3" : "CHN"
      },
      "devices" : [

      ]
    },
    "meta" : null
  },
  "errors" : null
}
  

$done({body : JSON.stringify(objc)});
