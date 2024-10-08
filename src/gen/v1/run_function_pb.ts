//
//Copyright 2022 The Crossplane Authors.
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file v1/run_function.proto (package apiextensions.fn.proto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Struct } from "@bufbuild/protobuf";

/**
 * Ready indicates whether a composed resource should be considered ready.
 *
 * @generated from enum apiextensions.fn.proto.v1.Ready
 */
export enum Ready {
  /**
   * @generated from enum value: READY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * True means the composed resource has been observed to be ready.
   *
   * @generated from enum value: READY_TRUE = 1;
   */
  TRUE = 1,

  /**
   * False means the composed resource has not been observed to be ready.
   *
   * @generated from enum value: READY_FALSE = 2;
   */
  FALSE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Ready)
proto3.util.setEnumType(Ready, "apiextensions.fn.proto.v1.Ready", [
  { no: 0, name: "READY_UNSPECIFIED" },
  { no: 1, name: "READY_TRUE" },
  { no: 2, name: "READY_FALSE" },
]);

/**
 * Severity of Function results.
 *
 * @generated from enum apiextensions.fn.proto.v1.Severity
 */
export enum Severity {
  /**
   * @generated from enum value: SEVERITY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Fatal results are fatal; subsequent Composition Functions may run, but
   * the Composition Function pipeline run will be considered a failure and
   * the first fatal result will be returned as an error.
   *
   * @generated from enum value: SEVERITY_FATAL = 1;
   */
  FATAL = 1,

  /**
   * Warning results are non-fatal; the entire Composition will run to
   * completion but warning events and debug logs associated with the
   * composite resource will be emitted.
   *
   * @generated from enum value: SEVERITY_WARNING = 2;
   */
  WARNING = 2,

  /**
   * Normal results are emitted as normal events and debug logs associated
   * with the composite resource.
   *
   * @generated from enum value: SEVERITY_NORMAL = 3;
   */
  NORMAL = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Severity)
proto3.util.setEnumType(Severity, "apiextensions.fn.proto.v1.Severity", [
  { no: 0, name: "SEVERITY_UNSPECIFIED" },
  { no: 1, name: "SEVERITY_FATAL" },
  { no: 2, name: "SEVERITY_WARNING" },
  { no: 3, name: "SEVERITY_NORMAL" },
]);

/**
 * Target of Function results and conditions.
 *
 * @generated from enum apiextensions.fn.proto.v1.Target
 */
export enum Target {
  /**
   * If the target is unspecified, the result targets the composite resource.
   *
   * @generated from enum value: TARGET_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Target the composite resource. Results that target the composite resource
   * should include detailed, advanced information.
   *
   * @generated from enum value: TARGET_COMPOSITE = 1;
   */
  COMPOSITE = 1,

  /**
   * Target the composite and the claim. Results that target the composite and
   * the claim should include only end-user friendly information.
   *
   * @generated from enum value: TARGET_COMPOSITE_AND_CLAIM = 2;
   */
  COMPOSITE_AND_CLAIM = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Target)
proto3.util.setEnumType(Target, "apiextensions.fn.proto.v1.Target", [
  { no: 0, name: "TARGET_UNSPECIFIED" },
  { no: 1, name: "TARGET_COMPOSITE" },
  { no: 2, name: "TARGET_COMPOSITE_AND_CLAIM" },
]);

/**
 * @generated from enum apiextensions.fn.proto.v1.Status
 */
export enum Status {
  /**
   * @generated from enum value: STATUS_CONDITION_UNSPECIFIED = 0;
   */
  CONDITION_UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATUS_CONDITION_UNKNOWN = 1;
   */
  CONDITION_UNKNOWN = 1,

  /**
   * @generated from enum value: STATUS_CONDITION_TRUE = 2;
   */
  CONDITION_TRUE = 2,

  /**
   * @generated from enum value: STATUS_CONDITION_FALSE = 3;
   */
  CONDITION_FALSE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Status)
proto3.util.setEnumType(Status, "apiextensions.fn.proto.v1.Status", [
  { no: 0, name: "STATUS_CONDITION_UNSPECIFIED" },
  { no: 1, name: "STATUS_CONDITION_UNKNOWN" },
  { no: 2, name: "STATUS_CONDITION_TRUE" },
  { no: 3, name: "STATUS_CONDITION_FALSE" },
]);

/**
 * A RunFunctionRequest requests that the Composition Function be run.
 *
 * @generated from message apiextensions.fn.proto.v1.RunFunctionRequest
 */
export class RunFunctionRequest extends Message<RunFunctionRequest> {
  /**
   * Metadata pertaining to this request.
   *
   * @generated from field: apiextensions.fn.proto.v1.RequestMeta meta = 1;
   */
  meta?: RequestMeta;

  /**
   * The observed state prior to invocation of a Function pipeline. State passed
   * to each Function is fresh as of the time the pipeline was invoked, not as
   * of the time each Function was invoked.
   *
   * @generated from field: apiextensions.fn.proto.v1.State observed = 2;
   */
  observed?: State;

  /**
   * Desired state according to a Function pipeline. The state passed to a
   * particular Function may have been accumulated by previous Functions in the
   * pipeline.
   *
   * Note that the desired state must be a partial object with only the fields
   * that this function (and its predecessors in the pipeline) wants to have
   * set in the object. Copying a non-partial observed state to desired is most
   * likely not what you want to do. Leaving out fields that had been returned
   * as desired before will result in them being deleted from the objects in the
   * cluster.
   *
   * @generated from field: apiextensions.fn.proto.v1.State desired = 3;
   */
  desired?: State;

  /**
   * Optional input specific to this Function invocation. A JSON representation
   * of the 'input' block of the relevant entry in a Composition's pipeline.
   *
   * @generated from field: optional google.protobuf.Struct input = 4;
   */
  input?: Struct;

  /**
   * Optional context. Crossplane may pass arbitary contextual information to a
   * Function. A Function may also return context in its RunFunctionResponse,
   * and that context will be passed to subsequent Functions. Crossplane
   * discards all context returned by the last Function in the pipeline.
   *
   * @generated from field: optional google.protobuf.Struct context = 5;
   */
  context?: Struct;

  /**
   * Optional extra resources that the Function required.
   * Note that extra resources is a map to Resources, plural.
   * The map key corresponds to the key in a RunFunctionResponse's
   * extra_resources field. If a Function requested extra resources that
   * did not exist, Crossplane sets the map key to an empty Resources message to
   * indicate that it attempted to satisfy the request.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.Resources> extra_resources = 6;
   */
  extraResources: { [key: string]: Resources } = {};

  /**
   * Optional credentials that this Function may use to communicate with an
   * external system.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.Credentials> credentials = 7;
   */
  credentials: { [key: string]: Credentials } = {};

  constructor(data?: PartialMessage<RunFunctionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.RunFunctionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "meta", kind: "message", T: RequestMeta },
    { no: 2, name: "observed", kind: "message", T: State },
    { no: 3, name: "desired", kind: "message", T: State },
    { no: 4, name: "input", kind: "message", T: Struct, opt: true },
    { no: 5, name: "context", kind: "message", T: Struct, opt: true },
    { no: 6, name: "extra_resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Resources} },
    { no: 7, name: "credentials", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Credentials} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunFunctionRequest {
    return new RunFunctionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunFunctionRequest {
    return new RunFunctionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunFunctionRequest {
    return new RunFunctionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RunFunctionRequest | PlainMessage<RunFunctionRequest> | undefined, b: RunFunctionRequest | PlainMessage<RunFunctionRequest> | undefined): boolean {
    return proto3.util.equals(RunFunctionRequest, a, b);
  }
}

/**
 * Credentials that a Function may use to communicate with an external system.
 *
 * @generated from message apiextensions.fn.proto.v1.Credentials
 */
export class Credentials extends Message<Credentials> {
  /**
   * Source of the credentials.
   *
   * @generated from oneof apiextensions.fn.proto.v1.Credentials.source
   */
  source: {
    /**
     * Credential data loaded by Crossplane, for example from a Secret.
     *
     * @generated from field: apiextensions.fn.proto.v1.CredentialData credential_data = 1;
     */
    value: CredentialData;
    case: "credentialData";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Credentials>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.Credentials";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "credential_data", kind: "message", T: CredentialData, oneof: "source" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Credentials {
    return new Credentials().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Credentials {
    return new Credentials().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Credentials {
    return new Credentials().fromJsonString(jsonString, options);
  }

  static equals(a: Credentials | PlainMessage<Credentials> | undefined, b: Credentials | PlainMessage<Credentials> | undefined): boolean {
    return proto3.util.equals(Credentials, a, b);
  }
}

/**
 * CredentialData loaded by Crossplane, for example from a Secret.
 *
 * @generated from message apiextensions.fn.proto.v1.CredentialData
 */
export class CredentialData extends Message<CredentialData> {
  /**
   * @generated from field: map<string, bytes> data = 1;
   */
  data: { [key: string]: Uint8Array } = {};

  constructor(data?: PartialMessage<CredentialData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.CredentialData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CredentialData {
    return new CredentialData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CredentialData {
    return new CredentialData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CredentialData {
    return new CredentialData().fromJsonString(jsonString, options);
  }

  static equals(a: CredentialData | PlainMessage<CredentialData> | undefined, b: CredentialData | PlainMessage<CredentialData> | undefined): boolean {
    return proto3.util.equals(CredentialData, a, b);
  }
}

/**
 * Resources represents the state of several Crossplane resources.
 *
 * @generated from message apiextensions.fn.proto.v1.Resources
 */
export class Resources extends Message<Resources> {
  /**
   * @generated from field: repeated apiextensions.fn.proto.v1.Resource items = 1;
   */
  items: Resource[] = [];

  constructor(data?: PartialMessage<Resources>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.Resources";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "items", kind: "message", T: Resource, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Resources {
    return new Resources().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Resources {
    return new Resources().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Resources {
    return new Resources().fromJsonString(jsonString, options);
  }

  static equals(a: Resources | PlainMessage<Resources> | undefined, b: Resources | PlainMessage<Resources> | undefined): boolean {
    return proto3.util.equals(Resources, a, b);
  }
}

/**
 * A RunFunctionResponse contains the result of a Composition Function run.
 *
 * @generated from message apiextensions.fn.proto.v1.RunFunctionResponse
 */
export class RunFunctionResponse extends Message<RunFunctionResponse> {
  /**
   * Metadata pertaining to this response.
   *
   * @generated from field: apiextensions.fn.proto.v1.ResponseMeta meta = 1;
   */
  meta?: ResponseMeta;

  /**
   * Desired state according to a Function pipeline. Functions may add desired
   * state, and may mutate or delete any part of the desired state they are
   * concerned with. A Function must pass through any part of the desired state
   * that it is not concerned with.
   *
   *
   * Note that the desired state must be a partial object with only the fields
   * that this function (and its predecessors in the pipeline) wants to have
   * set in the object. Copying a non-partial observed state to desired is most
   * likely not what you want to do. Leaving out fields that had been returned
   * as desired before will result in them being deleted from the objects in the
   * cluster.
   *
   * @generated from field: apiextensions.fn.proto.v1.State desired = 2;
   */
  desired?: State;

  /**
   * Results of the Function run. Results are used for observability purposes.
   *
   * @generated from field: repeated apiextensions.fn.proto.v1.Result results = 3;
   */
  results: Result[] = [];

  /**
   * Optional context to be passed to the next Function in the pipeline as part
   * of the RunFunctionRequest. Dropped on the last function in the pipeline.
   *
   * @generated from field: optional google.protobuf.Struct context = 4;
   */
  context?: Struct;

  /**
   * Requirements that must be satisfied for this Function to run successfully.
   *
   * @generated from field: apiextensions.fn.proto.v1.Requirements requirements = 5;
   */
  requirements?: Requirements;

  /**
   * Status conditions to be applied to the composite resource. Conditions may also
   * optionally be applied to the composite resource's associated claim.
   *
   * @generated from field: repeated apiextensions.fn.proto.v1.Condition conditions = 6;
   */
  conditions: Condition[] = [];

  constructor(data?: PartialMessage<RunFunctionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.RunFunctionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "meta", kind: "message", T: ResponseMeta },
    { no: 2, name: "desired", kind: "message", T: State },
    { no: 3, name: "results", kind: "message", T: Result, repeated: true },
    { no: 4, name: "context", kind: "message", T: Struct, opt: true },
    { no: 5, name: "requirements", kind: "message", T: Requirements },
    { no: 6, name: "conditions", kind: "message", T: Condition, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunFunctionResponse {
    return new RunFunctionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunFunctionResponse {
    return new RunFunctionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunFunctionResponse {
    return new RunFunctionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RunFunctionResponse | PlainMessage<RunFunctionResponse> | undefined, b: RunFunctionResponse | PlainMessage<RunFunctionResponse> | undefined): boolean {
    return proto3.util.equals(RunFunctionResponse, a, b);
  }
}

/**
 * RequestMeta contains metadata pertaining to a RunFunctionRequest.
 *
 * @generated from message apiextensions.fn.proto.v1.RequestMeta
 */
export class RequestMeta extends Message<RequestMeta> {
  /**
   * An opaque string identifying the content of the request. Two identical
   * requests should have the same tag.
   *
   * @generated from field: string tag = 1;
   */
  tag = "";

  constructor(data?: PartialMessage<RequestMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.RequestMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestMeta {
    return new RequestMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestMeta {
    return new RequestMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestMeta {
    return new RequestMeta().fromJsonString(jsonString, options);
  }

  static equals(a: RequestMeta | PlainMessage<RequestMeta> | undefined, b: RequestMeta | PlainMessage<RequestMeta> | undefined): boolean {
    return proto3.util.equals(RequestMeta, a, b);
  }
}

/**
 * Requirements that must be satisfied for a Function to run successfully.
 *
 * @generated from message apiextensions.fn.proto.v1.Requirements
 */
export class Requirements extends Message<Requirements> {
  /**
   * Extra resources that this Function requires.
   * The map key uniquely identifies the group of resources.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.ResourceSelector> extra_resources = 1;
   */
  extraResources: { [key: string]: ResourceSelector } = {};

  constructor(data?: PartialMessage<Requirements>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.Requirements";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "extra_resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ResourceSelector} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Requirements {
    return new Requirements().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Requirements {
    return new Requirements().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Requirements {
    return new Requirements().fromJsonString(jsonString, options);
  }

  static equals(a: Requirements | PlainMessage<Requirements> | undefined, b: Requirements | PlainMessage<Requirements> | undefined): boolean {
    return proto3.util.equals(Requirements, a, b);
  }
}

/**
 * ResourceSelector selects a group of resources, either by name or by label.
 *
 * @generated from message apiextensions.fn.proto.v1.ResourceSelector
 */
export class ResourceSelector extends Message<ResourceSelector> {
  /**
   * API version of resources to select.
   *
   * @generated from field: string api_version = 1;
   */
  apiVersion = "";

  /**
   * Kind of resources to select.
   *
   * @generated from field: string kind = 2;
   */
  kind = "";

  /**
   * Resources to match.
   *
   * @generated from oneof apiextensions.fn.proto.v1.ResourceSelector.match
   */
  match: {
    /**
     * Match the resource with this name.
     *
     * @generated from field: string match_name = 3;
     */
    value: string;
    case: "matchName";
  } | {
    /**
     * Match all resources with these labels.
     *
     * @generated from field: apiextensions.fn.proto.v1.MatchLabels match_labels = 4;
     */
    value: MatchLabels;
    case: "matchLabels";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ResourceSelector>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.ResourceSelector";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "api_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "match_name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "match" },
    { no: 4, name: "match_labels", kind: "message", T: MatchLabels, oneof: "match" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResourceSelector {
    return new ResourceSelector().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResourceSelector {
    return new ResourceSelector().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResourceSelector {
    return new ResourceSelector().fromJsonString(jsonString, options);
  }

  static equals(a: ResourceSelector | PlainMessage<ResourceSelector> | undefined, b: ResourceSelector | PlainMessage<ResourceSelector> | undefined): boolean {
    return proto3.util.equals(ResourceSelector, a, b);
  }
}

/**
 * MatchLabels defines a set of labels to match resources against.
 *
 * @generated from message apiextensions.fn.proto.v1.MatchLabels
 */
export class MatchLabels extends Message<MatchLabels> {
  /**
   * @generated from field: map<string, string> labels = 1;
   */
  labels: { [key: string]: string } = {};

  constructor(data?: PartialMessage<MatchLabels>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.MatchLabels";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "labels", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchLabels {
    return new MatchLabels().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchLabels {
    return new MatchLabels().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchLabels {
    return new MatchLabels().fromJsonString(jsonString, options);
  }

  static equals(a: MatchLabels | PlainMessage<MatchLabels> | undefined, b: MatchLabels | PlainMessage<MatchLabels> | undefined): boolean {
    return proto3.util.equals(MatchLabels, a, b);
  }
}

/**
 * ResponseMeta contains metadata pertaining to a RunFunctionResponse.
 *
 * @generated from message apiextensions.fn.proto.v1.ResponseMeta
 */
export class ResponseMeta extends Message<ResponseMeta> {
  /**
   * An opaque string identifying the content of the request. Must match the
   * meta.tag of the corresponding RunFunctionRequest.
   *
   * @generated from field: string tag = 1;
   */
  tag = "";

  /**
   * Time-to-live of this response. Deterministic Functions with no side-effects
   * (e.g. simple templating Functions) may specify a TTL. Crossplane may choose
   * to cache responses until the TTL expires.
   *
   * @generated from field: optional google.protobuf.Duration ttl = 2;
   */
  ttl?: Duration;

  constructor(data?: PartialMessage<ResponseMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.ResponseMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ttl", kind: "message", T: Duration, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseMeta {
    return new ResponseMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseMeta {
    return new ResponseMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseMeta {
    return new ResponseMeta().fromJsonString(jsonString, options);
  }

  static equals(a: ResponseMeta | PlainMessage<ResponseMeta> | undefined, b: ResponseMeta | PlainMessage<ResponseMeta> | undefined): boolean {
    return proto3.util.equals(ResponseMeta, a, b);
  }
}

/**
 * State of the composite resource (XR) and any composed resources.
 *
 * @generated from message apiextensions.fn.proto.v1.State
 */
export class State extends Message<State> {
  /**
   * The state of the composite resource (XR).
   *
   * @generated from field: apiextensions.fn.proto.v1.Resource composite = 1;
   */
  composite?: Resource;

  /**
   * The state of any composed resources.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.Resource> resources = 2;
   */
  resources: { [key: string]: Resource } = {};

  constructor(data?: PartialMessage<State>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.State";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "composite", kind: "message", T: Resource },
    { no: 2, name: "resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Resource} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State {
    return new State().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State {
    return new State().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State {
    return new State().fromJsonString(jsonString, options);
  }

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean {
    return proto3.util.equals(State, a, b);
  }
}

/**
 * A Resource represents the state of a composite or composed resource.
 *
 * @generated from message apiextensions.fn.proto.v1.Resource
 */
export class Resource extends Message<Resource> {
  /**
   * The JSON representation of the resource.
   *
   * * Crossplane will set this field in a RunFunctionRequest to the entire
   *   observed state of a resource - including its metadata, spec, and status.
   *
   * * A Function should set this field in a RunFunctionRequest to communicate
   *   the desired state of a composite or composed resource.
   *
   * * A Function may only specify the desired status of a composite resource -
   *   not its metadata or spec. A Function should not return desired metadata
   *   or spec for a composite resource. This will be ignored.
   *
   * * A Function may not specify the desired status of a composed resource -
   *   only its metadata and spec. A Function should not return desired status
   *   for a composed resource. This will be ignored.
   *
   * @generated from field: google.protobuf.Struct resource = 1;
   */
  resource?: Struct;

  /**
   * The resource's connection details.
   *
   * * Crossplane will set this field in a RunFunctionRequest to communicate the
   *   the observed connection details of a composite or composed resource.
   *
   * * A Function should set this field in a RunFunctionResponse to indicate the
   *   desired connection details of the composite resource.
   *
   * * A Function should not set this field in a RunFunctionResponse to indicate
   *   the desired connection details of a composed resource. This will be
   *   ignored.
   *
   * @generated from field: map<string, bytes> connection_details = 2;
   */
  connectionDetails: { [key: string]: Uint8Array } = {};

  /**
   * Ready indicates whether the resource should be considered ready.
   *
   * * Crossplane will never set this field in a RunFunctionRequest.
   *
   * * A Function should set this field to READY_TRUE in a RunFunctionResponse
   *   to indicate that a desired composed resource is ready.
   *
   * * A Function should not set this field in a RunFunctionResponse to indicate
   *   that the desired composite resource is ready. This will be ignored.
   *
   * @generated from field: apiextensions.fn.proto.v1.Ready ready = 3;
   */
  ready = Ready.UNSPECIFIED;

  constructor(data?: PartialMessage<Resource>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.Resource";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource", kind: "message", T: Struct },
    { no: 2, name: "connection_details", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 3, name: "ready", kind: "enum", T: proto3.getEnumType(Ready) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Resource {
    return new Resource().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Resource {
    return new Resource().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Resource {
    return new Resource().fromJsonString(jsonString, options);
  }

  static equals(a: Resource | PlainMessage<Resource> | undefined, b: Resource | PlainMessage<Resource> | undefined): boolean {
    return proto3.util.equals(Resource, a, b);
  }
}

/**
 * A Result of running a Function.
 *
 * @generated from message apiextensions.fn.proto.v1.Result
 */
export class Result extends Message<Result> {
  /**
   * Severity of this result.
   *
   * @generated from field: apiextensions.fn.proto.v1.Severity severity = 1;
   */
  severity = Severity.UNSPECIFIED;

  /**
   * Human-readable details about the result.
   *
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * Optional PascalCase, machine-readable reason for this result. If omitted,
   * the value will be ComposeResources.
   *
   * @generated from field: optional string reason = 3;
   */
  reason?: string;

  /**
   * The resources this result targets.
   *
   * @generated from field: optional apiextensions.fn.proto.v1.Target target = 4;
   */
  target?: Target;

  constructor(data?: PartialMessage<Result>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.Result";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "severity", kind: "enum", T: proto3.getEnumType(Severity) },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "target", kind: "enum", T: proto3.getEnumType(Target), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Result {
    return new Result().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Result {
    return new Result().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Result {
    return new Result().fromJsonString(jsonString, options);
  }

  static equals(a: Result | PlainMessage<Result> | undefined, b: Result | PlainMessage<Result> | undefined): boolean {
    return proto3.util.equals(Result, a, b);
  }
}

/**
 * Status condition to be applied to the composite resource. Condition may also
 * optionally be applied to the composite resource's associated claim. For
 * detailed information on proper usage of status conditions, please see
 * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#typical-status-properties.
 *
 * @generated from message apiextensions.fn.proto.v1.Condition
 */
export class Condition extends Message<Condition> {
  /**
   * Type of condition in PascalCase.
   *
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * Status of the condition.
   *
   * @generated from field: apiextensions.fn.proto.v1.Status status = 2;
   */
  status = Status.CONDITION_UNSPECIFIED;

  /**
   * Reason contains a programmatic identifier indicating the reason for the
   * condition's last transition. Producers of specific condition types may
   * define expected values and meanings for this field, and whether the values
   * are considered a guaranteed API. The value should be a PascalCase string.
   * This field may not be empty.
   *
   * @generated from field: string reason = 3;
   */
  reason = "";

  /**
   * Message is a human readable message indicating details about the
   * transition. This may be an empty string.
   *
   * @generated from field: optional string message = 4;
   */
  message?: string;

  /**
   * The resources this condition targets.
   *
   * @generated from field: optional apiextensions.fn.proto.v1.Target target = 5;
   */
  target?: Target;

  constructor(data?: PartialMessage<Condition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "apiextensions.fn.proto.v1.Condition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "target", kind: "enum", T: proto3.getEnumType(Target), opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Condition {
    return new Condition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Condition {
    return new Condition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Condition {
    return new Condition().fromJsonString(jsonString, options);
  }

  static equals(a: Condition | PlainMessage<Condition> | undefined, b: Condition | PlainMessage<Condition> | undefined): boolean {
    return proto3.util.equals(Condition, a, b);
  }
}

