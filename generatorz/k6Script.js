import http from "k6/http";
import { group } from "k6";

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  group("/health", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/health";
      let body = {};
      let params = {headers: {"Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/admin/user/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/admin/user/filter";
      let body = {"fields":"array","filter":"array","sort":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/admin/user/{userId}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/admin/user/{userId}";
      let body = {"address":"string","countryPrefix":"string","isActive":"boolean","isVerified":"boolean","nationalNumber":"string","password":"string","phoneNumber":"string","roleId":"integer"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/admin/user/{userId}";
      let body = {};
      let params = {headers: {"Authorization": "Bearer <Access Token>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/admin/user/{userId}/verify", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/admin/user/{userId}/verify";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/auth/login", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/auth/login";
      let body = {"email":"string","password":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/auth/login-evermos", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/auth/login-evermos";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/auth/login-merchant", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/auth/login-merchant";
      let body = {"clientID":"string","merchantCode":"string","password":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/auth/logout", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/auth/logout";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/auth/refresh-token", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/auth/refresh-token";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/auth/team-membership/regenerate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/auth/team-membership/regenerate";
      let body = {"teamMembershipId":"string","useSelfAccount":"boolean"};
      let params = {headers: {"Authorization": "<Access Token>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/credential", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/credential";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/credential/activate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/credential/activate";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/credential/regenerate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/credential/regenerate";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/credential/revoke", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/credential/revoke";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-contact", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-contact";
      let body = {"deviceKey":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-contact/callback/migrate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-contact/callback/migrate";
      let body = {};
      let params = {headers: {"Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-contact/callback/sync", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-contact/callback/sync";
      let body = {};
      let params = {headers: {"Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-contact/sync", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-contact/sync";
      let body = {"contactKey":"array","customerStatus":"string","deviceKey":"string","useSync":"boolean"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-contact/sync/{syncID}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-contact/sync/{syncID}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-conversation/migrate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-conversation/migrate";
      let body = {"batchEnd":"integer","batchSize":"integer","batchStart":"integer","timeEnd":"string","timeStart":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-conversation/sync", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-conversation/sync";
      let body = {"customerStatus":"array","isReview":"boolean"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-segmentation", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-segmentation";
      let body = {"description":"string","name":"string","rules":"array","status":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-segmentation/estimate-send-message", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-segmentation/estimate-send-message";
      let body = {"batchSize":"integer","maxDelay":"integer","minDelay":"integer","segmentationId":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-segmentation/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-segmentation/filter";
      let body = {"fields":"array","filter":"array","filterOr":"array","showRules":"boolean","sort":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-segmentation/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-segmentation/{id}";
      let body = {"description":"string","name":"string","rules":"array","status":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-segmentation/{id}";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer-segmentation/{id}/duplicate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer-segmentation/{id}/duplicate";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/bulk-create", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/bulk-create";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/bulk-delete", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/bulk-delete";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/bulk-update-status", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/bulk-update-status";
      let body = {"customersStatus":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/detail", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/detail";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/exists", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/exists";
      let body = {"phoneNumbers":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/filter";
      let body = {"fields":"array","filter":"array","filterOr":"array","showInsight":"boolean","showLastConversationAt":"boolean","showTag":"boolean","sort":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/filter-segmentation", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/filter-segmentation";
      let body = {"segmentationID":"string","showInsight":"boolean","showTag":"boolean"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/insight", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight";
      let body = {"components":"array","id":"string","idField":"string","source":"string"};
      let params = {headers: {"Intools-Secret": "<Intools Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/insight-component", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight-component";
      let body = {"description":"string","groupKey":"string","key":"string","name":"string","valueType":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/insight-component/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight-component/filter";
      let body = {"fields":"array","filter":"array","filterOr":"array","sort":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/insight-component/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight-component/{id}";
      let body = {"description":"string","groupKey":"string","key":"string","name":"string","valueType":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight-component/{id}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/insight/attribute", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight/attribute";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/insight/bulk", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/insight/bulk";
      let body = {"data":"array","useTransaction":"boolean"};
      let params = {headers: {"Intools-Secret": "<Intools Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/migrate-banned-device", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/migrate-banned-device";
      let body = {"newDeviceKey":"string","oldDeviceKey":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/search", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/search";
      let body = {"name":"string","pagination":"object","phoneNumber":"string","sort":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/tag/bulk-create", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/tag/bulk-create";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/tag/bulk-delete", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/tag/bulk-delete";
      let body = {"force":"boolean","id":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/tag/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/tag/filter";
      let body = {"fields":"array","filter":"array","filterOr":"array","sort":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/tag/link", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/tag/link";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/tag/unlink", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/tag/unlink";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/tag/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/tag/{id}";
      let body = {"color":"string","name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/upload", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/upload";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": ""}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/{id}";
      let body = {"address":"string","dateOfBirth":"string","deviceKey":"string","districtName":"string","email":"string","externalCustomerId":"string","gender":"string","name":"string","phoneNumber":"string","placeOfBirth":"string","postalCode":"string","province":"string","status":"string","subdistrictName":"string","urbanName":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/{id}";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/{id}/insight", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/{id}/insight";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/{id}/insight/attribute", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/{id}/insight/attribute";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/{id}/insight/global", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/{id}/insight/global";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/customer/{id}/insight/local", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/customer/{id}/insight/local";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/assign", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/assign";
      let body = {"deviceMapping":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/filter";
      let body = {"fields":"array","filter":"array","sort":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/jid/sync", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/jid/sync";
      let body = {"userDeviceIDs":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/registration-id/seed", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/registration-id/seed";
      let body = {"userDeviceIDs":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/unassign", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/unassign";
      let body = {"deviceMapping":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/link-by-phone-number", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/link-by-phone-number";
      let body = {"countryPrefix":"string","nationalNumber":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/link/status/{session}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/link/status/{session}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/qr/{session}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/qr/{session}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/rescan/validate/{session}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/rescan/validate/{session}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/validate/{session}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/validate/{session}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/{deviceKey}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/{deviceKey}";
      let body = {"deviceName":"string","isActive":"boolean","isEnableAutoSync":"boolean"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/{deviceKey}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/{deviceKey}/logout", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/{deviceKey}/logout";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/{deviceKey}/relink-by-phone-number", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/{deviceKey}/relink-by-phone-number";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/{deviceKey}/rescan", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/{deviceKey}/rescan";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/device/{deviceType}/{deviceKey}/set-default", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/device/{deviceType}/{deviceKey}/set-default";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/merchant/callback", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/merchant/callback";
      let body = {"event":"string","isActive":"boolean","name":"string","urlCallback":"string"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/merchant/callback/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/merchant/callback/filter";
      let body = {"fields":"array","filter":"array","filterOr":"array","sort":"array"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/merchant/callback/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/merchant/callback/{id}";
      let body = {"event":"string","isActive":"boolean","name":"string","urlCallback":"string"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/merchant/callback/{id}";
      let body = {};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template-group", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group";
      let body = {"name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template-group/link", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group/link";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template-group/unlink", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group/unlink";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template-group/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group/{id}";
      let body = {"name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group/{id}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template-group/{id}/details", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template-group/{id}/details";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template/spin-text", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template/spin-text";
      let body = {"content":"array","name":"string","scope":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template/spin-text/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template/spin-text/filter";
      let body = {"fields":"array","filter":"array","filterOr":"array","multiFilterAndWithOr":"array","sort":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message-template/spin-text/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template/spin-text/{id}";
      let body = {"content":"array","name":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message-template/spin-text/{id}";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/message-history", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/message-history";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/message-history/backup-and-cleanup", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/message-history/backup-and-cleanup";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/send", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/send";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/send-template", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/send-template";
      let body = {"deviceType":"string","from":"array","loadBalancerType":"string","template":"string","templateKey":"string","to":"array","useLoadBalancer":"boolean"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/send-template/preview", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/send-template/preview";
      let body = {"deviceType":"string","from":"array","loadBalancerType":"string","template":"string","templateKey":"string","to":"array","useLoadBalancer":"boolean"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/status", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/status";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/template", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template";
      let body = {"mediaUrl":"string","name":"string","template":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/template/variable", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/variable";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/variable";
      let body = {"defaultValue":"string","description":"string","isNeedProcessing":"boolean","name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/template/variable/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/variable/{id}";
      let body = {"defaultValue":"string","description":"string","isNeedProcessing":"boolean","name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/variable/{id}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/template/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/{id}";
      let body = {"mediaUrl":"string","name":"string","template":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/{id}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/message/template/{key}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/message/template/{key}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/migration/message-status-to-customer", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/migration/message-status-to-customer";
      let body = {"limit":"integer","merchantCode":"string","offset":"integer"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/phone-number/validate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/phone-number/validate";
      let body = {"phone":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/account/qiscus/iframe", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/account/qiscus/iframe";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/account/qiscus/register", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/account/qiscus/register";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/account/qiscus/validate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/account/qiscus/validate";
      let body = {"email":"string"};
      let params = {headers: {"Intools-Secret": "<Internal Tool Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/accounts", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/accounts";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/member/bulk", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/member/bulk";
      let body = {"useTransaction":"boolean","userIds":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/member/bulk-by-email", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/member/bulk-by-email";
      let body = {"useTransaction":"boolean","userEmails":"array"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/register", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/register";
      let body = {"clientId":"string","email":"string","merchantCode":"string","name":"string","password":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/register/bulk", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/register/bulk";
      let body = {"useTransaction":"boolean","users":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/team-membership", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/team-membership";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/team-membership";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/team-membership/qiscus-agent", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/team-membership/qiscus-agent";
      let body = {"email":"string","name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/team-membership/qiscus-agent";
      let body = {"emails":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/team-membership/qiscus-agent";
      let body = {"emails":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/user/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/user/{id}";
      let body = {"address":"string","clientId":"string","countryPrefix":"string","email":"string","merchantCode":"string","name":"string","nationalNumber":"string","password":"string","phoneNumber":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/webhook/banned", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/webhook/banned";
      let body = {"bannedExpiry":"integer","bannedReason":"string","jid":"string"};
      let params = {headers: {"X-Secret-Key": "<Secret Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/webhook/logout", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/webhook/logout";
      let body = {"jid":"string","reason":"string","reasonCode":"integer"};
      let params = {headers: {"X-Secret-Key": "<Secret Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/webhook/message-status", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/webhook/message-status";
      let body = {};
      let params = {headers: {"Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/webhook/whatsapp/link-device-by-phone-number", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/webhook/whatsapp/link-device-by-phone-number";
      let body = {"message":"string","sessionID":"string","status":"string"};
      let params = {headers: {"X-Secret-Key": "<Secret Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/webhook/whatsapp/message-history", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/webhook/whatsapp/message-history";
      let body = {"messageConversationHistories":"array","sentAt":"string"};
      let params = {headers: {"X-Secret-Key": "<Secret Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/webhook/whatsapp/message-receipt", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/webhook/whatsapp/message-receipt";
      let body = {};
      let params = {headers: {"Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/whitelist/message-conversation-history-whitelist/bulk-create", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/whitelist/message-conversation-history-whitelist/bulk-create";
      let body = {"phoneNumbers":"array"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/whitelist/message-conversation-history-whitelist/bulk-delete", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/whitelist/message-conversation-history-whitelist/bulk-delete";
      let body = {"phoneNumbers":"array"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/whitelist/message-conversation-history-whitelist/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/whitelist/message-conversation-history-whitelist/filter";
      let body = {"fields":"array","filter":"array","sort":"array"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/whitelist/message-conversation-history-whitelist/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/whitelist/message-conversation-history-whitelist/{id}";
      let body = {"phoneNumber":"string"};
      let params = {headers: {"Intools-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow";
      let body = {"description":"string","name":"string","type":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/execution", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/execution";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/execution-list", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/execution-list";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/migrate-to-customizable", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/migrate-to-customizable";
      let body = {"workflowIds":"array"};
      let params = {headers: {"Migration-Secret": "<Migration Secret>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/retry", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/retry";
      let body = {"status":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/run", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/run";
      let body = {"messageParameter":"array","rules":"array","sendTo":"array","sendToByPhoneNumber":"array","taskID":"string","workflowID":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/scheduler/long-execution", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/scheduler/long-execution";
      let body = {};
      let params = {headers: {"Intools-Secret": "<Internal Secret>", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/broadcast/{taskId}/scheduler/run", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/broadcast/{taskId}/scheduler/run";
      let body = {"executionId":"integer","executionTime":"string","requestIdForRerun":"string","startFromPage":"integer","workflowTimezone":"string"};
      let params = {headers: {"Internal-N8N-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/filter", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/filter";
      let body = {"fields":"array","filter":"array","sort":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/filter-with-rule", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/filter-with-rule";
      let body = {"isActive":"boolean","rules":"array"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/history", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/history";
      let body = {"status":"string","workflowID":"string"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/history/{workflowId}/{executionId}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/history/{workflowId}/{executionId}";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}";
      let body = {"description":"string","name":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.delete(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/activate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/activate";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/broadcast/execution/{executionId}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/broadcast/execution/{executionId}";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/broadcast/execution/{executionId}/summary", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/broadcast/execution/{executionId}/summary";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/broadcast/task", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/broadcast/task";
      let body = {"customerSegmentationId":"string","messageTemplateKey":"string","name":"string","rules":"array","useSegmentation":"boolean"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.post(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/deactivate", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/deactivate";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/detail", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/detail";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/rollback", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/rollback";
      let body = {"versionId":"string"};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/task/broadcast/{taskId}", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/task/broadcast/{taskId}";
      let body = {"customerSegmentationId":"string","messageTemplateKey":"string","name":"string","rules":"array","useSegmentation":"boolean"};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.put(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/version/list", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/version/list";
      let body = {};
      let params = {headers: {"X-Client-Application": "Client Application (ex: appsmith)", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

  group("/v1/workflow/{id}/version/{versionId}/preview", () => {
    // Request No. 1:
    {
      let url = BASE_URL + "/v1/workflow/{id}/version/{versionId}/preview";
      let body = {};
      let params = {headers: {"X-API-Key": "<API Key>", "Accept": "application/json"}};
      let request = http.get(url, JSON.stringify(body), params);
      console.log(request.body);
    }
  });

}