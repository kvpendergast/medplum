// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
/*
 * This is a generated file
 * Do not edit manually.
 */

import type { Attachment } from './Attachment.d.ts';
import type { Bot } from './Bot.d.ts';
import type { Coding } from './Coding.d.ts';
import type { Extension } from './Extension.d.ts';
import type { Identifier } from './Identifier.d.ts';
import type { Meta } from './Meta.d.ts';
import type { Narrative } from './Narrative.d.ts';
import type { Reference } from './Reference.d.ts';
import type { Resource } from './Resource.d.ts';

/**
 * AI assistant configuration for a project.
 */
export interface Assistant {

  /**
   * This is a Assistant resource
   */
  readonly resourceType: 'Assistant';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * An absolute URI that is used to identify this assistant when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which an authoritative instance of this
   * assistant is (or will be) published. This URL can be the target of a
   * canonical reference. It SHALL remain the same when the assistant is
   * stored on different servers.
   */
  url: string;

  /**
   * A formal identifier that is used to identify this assistant when it is
   * represented in other formats, or referenced in a specification, model,
   * design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the assistant
   * when it is referenced in a specification, model, design or an
   * instance. This is an arbitrary value managed by the assistant author
   * and is not expected to be globally unique. There may be different
   * assistant instances that have the same url but different versions.
   */
  version?: string;

  /**
   * The human readable friendly name of the assistant.
   */
  name: string;

  /**
   * A summary, characterization or explanation of the assistant.
   */
  description?: string;

  /**
   * The status of the assistant.
   */
  status: 'active' | 'off' | 'draft';

  /**
   * The LLM model to use for this assistant. The coding system identifies
   * the model provider and the code identifies the model within that
   * provider.
   */
  model?: Coding;

  /**
   * Default system instructions for the assistant.
   */
  systemPrompt?: string;

  /**
   * Optional bot that provides tool execution for this assistant.
   */
  bot?: Reference<Bot>;

  /**
   * Tool definitions available to the assistant.
   */
  tools?: AssistantTools[];

  /**
   * Sampling temperature for the model.
   */
  temperature?: number;

  /**
   * Image of the assistant.
   */
  photo?: Attachment;
}

/**
 * Tool definitions available to the assistant.
 */
export interface AssistantTools {

  /**
   * The tool name.
   */
  name: string;

  /**
   * A human-readable description of the tool.
   */
  description?: string;

  /**
   * JSON schema describing the tool parameters.
   */
  parameterSchema?: string;
}
